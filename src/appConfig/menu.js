import { views } from './views'
import { actions } from './actions'

// hamburger menu for admin stuff
const menuItems = [
  { icon: 'home', label: 'Home', view: views.HOME },
  { icon: 'location arrow', label: 'Reset Location', view: null, action: actions.REGEO },
  { icon: 'marker', label: 'Show Location', view: null, action: actions.SHOWGEO },
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

export const hamburgerMenu = {
  showLabels: true,
  items: menuItems,
  iconSize: 'mini'
}
