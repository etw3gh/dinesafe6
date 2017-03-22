import { actions } from './actions'
import { views } from './views'
import { initialState } from './initstate'


// hamburger menu for admin stuff
const menuItems = [
  { icon: 'home', label: 'Home', view: views.HOME },
  { icon: 'compass', label: 'Set Location', view: views.REGEO },
  { icon: 'compass', label: 'Show Location', view: views.SHOWGEO },
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

const speedDialMenu = {
  showLabels: true,
  items: speedDialMenuItems,
  iconSize: 'medium'
}

const hamburgerMenu = {
  showLabels: true,
  items: menuItems,
  iconSize: 'mini'
}

export { hamburgerMenu, speedDialMenu }
