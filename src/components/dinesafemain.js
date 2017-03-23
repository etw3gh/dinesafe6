require('semantic-ui/dist/semantic.min.css')
require('onsenui/css/onsenui.css')
require('onsenui/css/onsen-css-components.css')

import React, { Component } from 'react'

import { createStore } from 'redux'
//import { actions } from '../appConfig/actions'
import { views } from '../appConfig/views'
import { Dispatch } from '../classes/dispatcher'
import { reducer } from '../classes/reducer'

import { Geo } from '../classes/geo'

import { initialState } from '../appConfig/initstate'
import { hamburgerMenu, speedDialMenu } from '../appConfig/menu'
import { Pop } from '../classes/pop'

import { Pho } from './pho'
import { IconOrImage } from './ioi'
import { SourceCode } from './sourcecode'
import { InfoCard } from './infocard'
import { TwitterTL } from './twitter'
import { Fab, List, ListItem, Page, Splitter,  SpeedDial, SpeedDialItem, SplitterContent, SplitterSide, Toolbar } from 'react-onsenui'
import { Icon } from 'semantic-ui-react'

export const store = createStore(reducer, initialState);

class MainView extends Component {

  render () {
    const home = (
      <div>
        <h2>Welcome</h2>
        <p>
          Click the Fork and Knife at the bottom of the page to begin
        </p>
      </div>
     )
    const V = this.props.view;

    const doRefreshGeo = this.props.doRefreshGeo;
    const doShowGeo = this.props.doShowGeo;

    if (doShowGeo || doRefreshGeo) {
      if (doShowGeo ) {
        const poptart = Geo.currentLoc(this.props.lat, this.props.lng);
        Pop.INFO(poptart);
      }
      if (doRefreshGeo) {
        Geo.getLocation(Geo.REFRESH, true);
      }
    }

    if (V === views.HOME) {
      return home;
    }
    else if (V === views.PHO) {
      return <Pho />
    }
    else if (V === views.SOURCE) {
      return <SourceCode />
    }
    else if (V === views.LICENCE) {
      return <InfoCard link='https://www.gnu.org/licenses/gpl-3.0.en.html'
                       icon=''
                       icontxt='gnu.org'
                       iconimg='../images/gnu_black_30x26.png'
                       img='../images/gplv3-127x51.png'
                       meta='Version 3, 29 June 2007'
                       header='GNU GENERAL PUBLIC LICENSE'
                       desc='Copyright 2017 Eli Tabello' />
    }
    else if (V === views.OPENDATA) {
      return <InfoCard link='http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=4a37e03bb8d1e310VgnVCM10000071d60f89RCRD'
                       icon='creative commons'
                       icontxt='toronto.ca'
                       iconimg=''
                       img='../images/to.png'
                       meta='Toronto'
                       header='Open Government Licence'
                       desc='Version 1.0' />
    }
    else if (V === views.TWITTERBOT) {
      return <TwitterTL />
    }
    else if (V === views.TWITTERHELP) {
      return <InfoCard link='https://twitter.com/mydinesafe'
                       icon='twitter'
                       icontxt='@mydinesafe'
                       img=''
                       meta='In development'
                       desc='You will soon be able to query the dinesafe inspection database via this interactive twitterbot....'
                       header='Twitter Bot' />
    }
    else
    {
      return <div>View: {V}</div>
    }

  }
}
class AppRoot extends Component {

  state = { isOpen: false, portrait: true }

  updateDimensions = () => {
    let portrait = window.innerHeight > window.innerWidth;
    this.setState( { portrait: portrait } );
  }

  componentWillMount = () => {
    this.updateDimensions();
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateDimensions);
  }
  
  componentDidMount = () => {
    store.subscribe( () => this.forceUpdate() );
    Geo.getLocation(Geo.INIT);
    window.addEventListener('resize', this.updateDimensions);
  }


  renderToolbar = () => {
    return (
      <Toolbar>
        <div className='left'>
          <Icon onClick={this.showMenu} size='large' className='hamburger' name='sidebar'/>
        </div>
        <div className='center'>Dinesafe 6</div>
      </Toolbar>
    )
  }
  renderSpeedDial = () => {
    const dialItems = speedDialMenu.items.map( (item, index) => {
    return (
      <SpeedDialItem key={'speed_dial_' + index} onClick={ () => {this.menuChoice(item.view)}}>
        <IconOrImage icon={item.icon} img={item.img}  />
      </SpeedDialItem>
    )

    })
    //let portrait = window.innerHeight > window.innerWidth;
    let openDirection = this.state.portrait ? 'up' : 'left';

    return(
      <SpeedDial position='bottom right' direction={openDirection} >
        <Fab>
          <Icon size='large' name='food' />
        </Fab>
        {dialItems}
      </SpeedDial>
    )
  }

  hideMenu = () => {
    this.setState( { isOpen: false } );
  }
  menuChoice = (v) => {
    this.hideMenu();
    Dispatch.menu(v);
  }
  showMenu = () => {
    this.setState( { isOpen: true } )
  }

  render() {

    const currentState = store.getState().app;
    const doRefreshGeo = currentState.doRefreshGeo;
    const doShowGeo = currentState.doShowGeo;
    const geo = store.getState().app.geo;
    const splitterStyle = 'boxShadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)';


    const menuItems = hamburgerMenu.items.map( (item) => {
      return (
        <ListItem key={item.label} onClick={ () => {this.menuChoice(item.view)}} tappable><IconOrImage icon={item.icon} img={item.img} />
           <span className='alignMenuItems'>{item.label}</span>
        </ListItem>
      )}
    )

    return (
      <Splitter>
        <SplitterSide
          style={ {splitterStyle} }
          side='left'
          width={200}
          collapse={true}
          isSwipeable={true}
          isOpen={this.state.isOpen}
          onClose={this.hideMenu}
          onOpen={this.showMenu} >
          <Page>
            <List>{menuItems}</List>
          </Page>
        </SplitterSide>
        <SplitterContent>
          <Page renderToolbar={this.renderToolbar} renderFixed={this.renderSpeedDial}>
            <section style={{textAlign: 'center', margin: '16px'}}>
              <MainView view={currentState.view} doRefreshGeo={doRefreshGeo} doShowGeo={doShowGeo} lat={geo.lat} lng={geo.lng}/>
            </section>
          </Page>
        </SplitterContent>
      </Splitter>

    )
  }
}

export default AppRoot;
