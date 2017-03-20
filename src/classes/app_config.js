//import { createStore } from 'redux'
//import { reducer } from './reducer'
export const views = {

  HOME: 'home',
  LIST: 'list',
  MAP: 'map',
  PHO: 'pho',
  SEARCH: 'search',

  OPENDATA: 'opendata',
  LICENCE: 'licence',
  SOURCE: 'source',
  TWITTERBOT: 'twitter',
  TWITTERHELP: 'twitterhelp',
  HELP: 'help',
  INFO: 'info'
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

// hamburger menu for admin stuff
const menuItems = [
  { icon: 'home', label: 'Home', view: views.HOME },
  { icon: 'creative commons', label: 'Open Data Licence', view: views.OPENDATA },
  { icon: 'copyright', label: 'Licence', view: views.LICENCE },
  { icon: 'github', label: 'Source Code', view: views.SOURCE },
  { icon: 'twitter', label: 'Twitter Bot', view: views.TWITTERBOT },
  { icon: 'twitter square', label: 'Twitter Bot Help', view: views.TWITTERHELP },
  { icon: 'help circle', label: 'Help', view: views.HELP },
  { icon: 'info', label: 'Info', view: views.INFO }
]

// speed dial menu for main UX
const speedDialMenuItems = [
  { icon: 'food', label: 'Home', view: views.HOME },
  { icon: null, img: 'images/phoicon_white_34x34.png', label: ' Pho', view: views.PHO },
  { icon: 'search', label: 'Search', view: views.SEARCH },
  { icon: 'map outline', label: 'Map', view: views.MAP },
  { icon: 'columns', label: 'List', view: views.LIST }
]
export const speedDialMenu = {
  showLabels: true,
  items: speedDialMenuItems,
  iconSize: 'medium'
}

export const menu = {
  showLabels: true,
  items: menuItems,
  iconSize: 'mini'
}

//export const store = createStore(reducer, initialState);
