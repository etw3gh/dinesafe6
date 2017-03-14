//import { createStore } from 'redux'
//import { reducer } from './reducer'
export const views = {
  INFO: 'info',
  HELP: 'help',
  HOME: 'home',
  LIST: 'list',
  MAP: 'map',
  PHO: 'pho',
  SEARCH: 'search',
  TWITTER: 'twitter'
}

export const actions = {
  GEO: 'GEO',
  NEARBY: 'NEARBY',
  PHO: 'PHO',
  SETVIEW: 'SETVIEW'
}

export const initialState = {
  app: {
    view: views.HOME,
    geo: { lat: -1, lng: -1},
    phoVenues: [],
    nearbyVenues: []
  }
};

//export const store = createStore(reducer, initialState);
