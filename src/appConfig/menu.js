import { routes } from './routes'
import { actions } from './actions'

// hamburger menu for admin stuff
const menuItems = [
  { icon: 'home', label: 'Home', route: routes.HOME, action: null },
  { icon: 'location arrow', label: 'Reset Location', route: null, action: actions.REGEO },
  { icon: 'marker', label: 'Show Location', route: null, action: actions.SHOWGEO },
  { icon: 'creative commons', label: 'Open Data Licence', route: routes.OPENDATA, action: null },
  { icon: 'copyright', label: 'Licence', route: routes.LICENCE, action: null },
  { icon: 'github', label: 'Source Code', route: routes.SOURCE, action: null },
  { icon: 'twitter', label: 'Twitter Bot', route: routes.TWITTERBOT, action: null },
  { icon: 'twitter square', label: 'Twitter Bot Help', route: routes.TWITTERHELP, action: null },
  { icon: 'help circle', label: 'Help', route: routes.HELP, action: null },
  { icon: 'info', label: 'Info', route: routes.INFO, action: null }
]

// speed dial menu for main UX
const speedDialMenuItems = [
  { icon: null, img: 'images/phoicon_white_34x34.png', label: ' Pho', route: routes.PHO, action: null },
  { icon: 'search', label: 'Search', route: routes.SEARCH, action: null },
  { icon: 'map', label: 'Map', route: routes.MAP, action: null },
  { icon: 'columns', label: 'List', route: routes.LIST, action: null }
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
