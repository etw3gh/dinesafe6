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

const menu_items = [
  {
    icon: 'home',
    label: 'Home',
    view: views.HOME
  },
  {
    icon: 'search',
    label: 'Search',
    view: views.SEARCH
  },
  {
    icon: 'map outline',
    label: 'Map',
    view: views.MAP
  },
  {
    icon: 'columns',
    label: 'List',
    view: views.LIST
  },
  {
    icon: null,
    img: 'images/phoicon.png',
    label: ' Pho',
    view: views.PHO
  },
  {
    icon: 'twitter',
    label: 'Twitter',
    view: views.TWITTER
  },
  {
    icon: 'help circle',
    label: 'Help',
    view: views.HELP
  },
  {
    icon: 'info',
    label: 'Info',
    view: views.INFO
  }
]
export const menu = {
  showLabels: true,
  items: menu_items,
  iconSize: 'mini'
}

//export const store = createStore(reducer, initialState);
