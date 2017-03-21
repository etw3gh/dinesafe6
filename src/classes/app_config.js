
export const views = {

  HOME: 'HOME',
  LIST: 'LIST',
  MAP: 'MAP',
  PHO: 'PHO',
  SEARCH: 'SEARCH',

  OPENDATA: 'OPENDATA',
  LICENCE: 'LICENCE',
  SOURCE: 'SOURCE',
  TWITTERBOT: 'TWITTERBOT',
  TWITTERHELP: 'TWITTERHELP',
  HELP: 'HELP',
  INFO: 'INFO'
}

// determines if a toastr message will be shown upon successful aquisition of geoloaction data
export const GEO = {
  INIT: false,
  REFRESH: true
}

export const actions = {
  GEO: 'GEO',
  REGEO: 'REGEO',
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
  { icon: 'compass', label: 'Get Location', view: views.REGEO },
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
  { icon: null, img: 'images/phoicon_white_34x34.png', label: ' Pho', view: views.PHO },
  { icon: 'search', label: 'Search', view: views.SEARCH },
  { icon: 'map', label: 'Map', view: views.MAP },
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
