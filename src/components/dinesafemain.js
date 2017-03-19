import React, { Component } from 'react'
import { createStore } from 'redux'

import { Pop } from '../classes/pop'

import { menu, views, actions, initialState } from '../classes/app_config'
import { reducer } from '../classes/reducer'

import { Pho } from './pho'

require('semantic-ui/dist/semantic.min.css')
require('onsenui/css/onsenui.css')
require('onsenui/css/onsen-css-components.css')
import { Button, List, ListItem, Page, Splitter, SplitterContent, SplitterSide, Toolbar, ToolbarButton } from 'react-onsenui'
import { Icon } from 'semantic-ui-react'


Pop.OK('Welcome to Dinesafe6 (Toronto)');


export const store = createStore(reducer, initialState);

class AppComponent extends Component {
  render() {
    if (this.props.view === views.PHO){
      return (<Pho />)
    }
    else {
      return (<div>app component {this.props.view}</div>)
    }

  }
}


class AppRoot extends Component {

  state = { isOpen: false }

  componentDidMount = () => {
    store.subscribe( () => this.forceUpdate() );

    this.getLocation();
  }

  renderToolbar = () => {
    return (
      <Toolbar>
        <div className='left'>
          <Icon onClick={this.showMenu} size='large' className='hamburger' name='sidebar'/>
        </div>
        <div className='center'>Dinesafe 6<Icon size='large' name='food'/></div>
      </Toolbar>
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
    else if (v === views.PHO) {
      store.dispatch( { type: actions.SETVIEW, view: views.PHO } )
    }
    else if (v === views.SEARCH) {
      store.dispatch( { type: actions.SETVIEW, view: views.SEARCH } )
    }
    else if (v === views.TWITTER) {
      store.dispatch( { type: actions.SETVIEW, view: views.TWITTER } )
    }
    else {
      store.dispatch( { type: actions.SETVIEW, view: views.HOME } )
    }
  }
  showMenu = () => {
    this.setState( { isOpen: true } )
  }
  getLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      var lat = pos.coords.latitude;
      var lng = pos.coords.longitude;
      store.dispatch( { type: actions.GEO, lat: lat, lng: lng } );
    });
  }

  render() {

    const currentState = store.getState().app;
    const view = currentState.view;
    const splitterStyle = "boxShadow: boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'";


    const menuItems = menu.items.map( (item) => {

      // some menu items may use a custom image instead of the SemanticUI Icon component
      const icon_or_image = item.icon === null ? <span><img className='phoIcon' src={item.img} />&nbsp;</span> : <Icon name={item.icon} />;

      return (
        <ListItem key={item.label} onClick={ () => {this.menuChoice(item.view)}} tappable>{icon_or_image}
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
          <Page renderToolbar={this.renderToolbar}>
            <section style={{textAlign: 'center', margin: '16px'}}>
              <p>
                CurrentView: {currentState.view}
              </p>
            </section>
          </Page>
        </SplitterContent>
      </Splitter>

    )
  }
}

export default AppRoot;
