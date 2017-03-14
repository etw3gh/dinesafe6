import React from 'react'
import { createStore } from 'redux'
let page = require('page')
let axios = require('axios')
import { Button, Icon, Modal } from 'semantic-ui-react'
import { Urls } from '../data/urls.js'

const actions = { GEO: 'GEO', NEARBY: 'NEARBY', PHO: 'PHO', SETVIEW: 'SETVIEW'}
const views = { INFO: 'info', HELP: 'help', HOME: 'home', LIST: 'list', MAP: 'map', PHO: 'pho', SEARCH: 'search', TWITTER: 'twitter'}


const initialState = {
  app: {
    view: views.HOME,
    geo: { lat: -1, lng: -1},
    phoVenues: [],
    nearbyVenues: []
  }
};

function reducer(state, action) {
  if (action.type === actions.GEO){
    console.log('geo action');
    let localState = Object.assign({}, state);;
    localState.app.geo.lat = action.lat;
    localState.app.geo.lng = action.lng;
    return localState;
  }
  else if (action.type === actions.SETVIEW) {
    console.log('reducer|setview')
    let localState = Object.assign({}, state);;
    localState.app.view = action.view;
    return localState;
  }
  else if (action.type === actions.PHO) {
    let localState = Object.assign({}, state);;
    localState.app.phoVenues = action.venues;
    return localState;
  }
  else {
    return state;
  }
}



const store = createStore(reducer, initialState);

class Pho extends React.Component {
  componentDidMount = () => {
    const geo = store.getState().app.geo;
    const phourl = `${Urls.heroku.pho.near}lat=${geo.lat}&lng=${geo.lng}&limit=50`;
    console.log(phourl);
    axios.get(phourl).then( (res) => {
      console.log(res.data);
      store.dispatch( { type: actions.PHO, venues: res.data } )
    })
  }
  render() {
    return (<div>phos</div>)
  }
}

class AppComponent extends React.Component {
  render() {
    if (this.props.view === views.PHO){
      return (<Pho />)
    }
    else {
      return (<div>app component {this.props.view}</div>)
    }

  }
}

/*
Using page to implement a homebrew router
because it plays better with pure html sidebar
*/
class AppRoot extends React.Component {
  componentDidMount = () => {
    store.subscribe( () => this.forceUpdate() );
    page.start();
    this.getLocation();
  }

  pageRouter = () => {
      page('/', (ctx) => {
        console.log(ctx)
        store.dispatch( { type: actions.SETVIEW, view: views.HOME } );
      });
      page('/info', ()=> {
        store.dispatch( { type: actions.SETVIEW, view: views.INFO } );
      })
      page('/map', ()=> {
        store.dispatch( { type: actions.SETVIEW, view: views.MAP } );
      })
      page('/list', ()=> {
        store.dispatch( { type: actions.SETVIEW, view: views.LIST } );
      })
      page('/search', ()=> {
        store.dispatch( { type: actions.SETVIEW, view: views.SEARCH } );
      })
      page('/twitter', ()=> {
        store.dispatch( { type: actions.SETVIEW, view: views.TWITTER } );
      })
      page('/pho', ()=> {
        store.dispatch( { type: actions.SETVIEW, view: views.PHO } );
      })
      page('/help', ()=> {
        store.dispatch( { type: actions.SETVIEW, view: views.HELP } );
      })
  }

  getLocation = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      var lat = pos.coords.latitude;
      var lng = pos.coords.longitude;
      store.dispatch( { type: actions.GEO, lat: lat, lng: lng } );
    });
  }

  render() {
    this.pageRouter();
    const currentState = store.getState().app;
    console.log(currentState);
    return (

      <AppComponent view={currentState.view} />
    )
  }
}

export default AppRoot;
