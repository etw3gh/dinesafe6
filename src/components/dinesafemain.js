require('semantic-ui/dist/semantic.min.css')
require('onsenui/css/onsenui.css')
require('onsenui/css/onsen-css-components.css')

import React, { Component } from 'react'
import { createStore } from 'redux'


import { views } from './appConfig/views'
import { actions } from './appConfig/actions'


import { GEO } from '../appConfig/geo'

import { initialState } from '../appConfig/initstate'
import { hamburgerMenu, speedDialMenu } from '../appConfig/menu'
import { Pop } from '../classes/pop'
import { reducer } from '../classes/reducer'
import { Pho } from './pho'
import { IconOrImage } from './ioi'
import { SourceCode } from './sourcecode'

import { Fab, List, ListItem, Page, Splitter,  SpeedDial, SpeedDialItem, SplitterContent, SplitterSide, Toolbar } from 'react-onsenui'
import { Icon } from 'semantic-ui-react'


Pop.OK('Welcome to Dinesafe6 (Toronto)');


export const store = createStore(reducer, initialState);

class MainView extends Component {
  render () {
    const V = this.props.view;
    const renderView = <div>View: {V}</div>
    if (V === views.PHO)
    {
      return <Pho />
    }
    else if (V === views.SOURCE)
    {
      return <SourceCode />
    }
    else
    {
      return renderView;
    }

  }
}

class AppRoot extends Component {

  state = { isOpen: false }

  componentDidMount = () => {
    store.subscribe( () => this.forceUpdate() );

    this.getLocation(GEO.INIT);
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
    return(
      <SpeedDial position='bottom right'>
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
    if (v === views.INFO) {
      store.dispatch( { type: actions.SETVIEW, view: views.INFO } )
    }
    else if (v === views.HELP) {
      store.dispatch( { type: actions.SETVIEW, view: views.HELP } )
    }
    else if (v === views.HOME) {
      store.dispatch( { type: actions.SETVIEW, view: views.HOME } )
    }
    else if (v === views.LIST) {
      store.dispatch( { type: actions.SETVIEW, view: views.LIST } )
    }
    else if (v === views.MAP) {
      store.dispatch( { type: actions.SETVIEW, view: views.MAP } )
    }
    else if (v === views.REGEO) {
      this.getLocation(GEO.REFRESH);
    }
    else if (v === views.SHOWGEO) {
      const geoData = store.getState().app.geo;
      const lat = geoData.lat;
      const lng = geoData.lng;
      Pop.INFO(`<h3>Location Set</h3>(${lat}, ${lng})`);
    }
    else if (v === views.PHO) {
      store.dispatch( { type: actions.SETVIEW, view: views.PHO } )
    }
    else if (v === views.SEARCH) {
      store.dispatch( { type: actions.SETVIEW, view: views.SEARCH } )
    }
    else if (v === views.TWITTERBOT) {
      store.dispatch( { type: actions.SETVIEW, view: views.TWITTERBOT } )
    }
    else if (v === views.TWITTERHELP) {
      store.dispatch( { type: actions.SETVIEW, view: views.TWITTERHELP } )
    }
    else if (v === views.OPENDATA) {
      store.dispatch( { type: actions.SETVIEW, view: views.OPENDATA } )
    }
    else if (v === views.LICENCE) {
      store.dispatch( { type: actions.SETVIEW, view: views.LICENCE } )
    }
    else if (v === views.SOURCE) {
      store.dispatch( { type: actions.SETVIEW, view: views.SOURCE } )
    }
    else {
      store.dispatch( { type: actions.SETVIEW, view: views.HOME } )
    }
  }
  showMenu = () => {
    this.setState( { isOpen: true } )
  }
  getLocation = (isRefresh) => {
    if (!navigator.geolocation) {
      this.badGeo;
      return;
    }
    navigator.geolocation.getCurrentPosition((pos) => {
      var lat = pos.coords.latitude;
      var lng = pos.coords.longitude;
      store.dispatch( { type: actions.GEO, lat: lat, lng: lng } );
      if (true) { //isRefresh using true for testing
        Pop.INFO(`<h3>Location Set</h3>(${lat}, ${lng})`);
      }
    }, () => this.badGeo());
  };

  badGeo = () => {
    Pop.ERR('Geolocation failed');
  }

  render() {

    const currentState = store.getState().app;
    //const view = currentState.view;
    const splitterStyle = 'boxShadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)';


    const menuItems = menu.items.map( (item) => {
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
              <MainView view={currentState.view} />
            </section>
          </Page>
        </SplitterContent>
      </Splitter>

    )
  }
}

export default AppRoot;
