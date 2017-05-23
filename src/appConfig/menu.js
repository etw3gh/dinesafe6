import { routes } from './routes'
import { actions } from './actions'

// hamburger menu for admin stuff
const menuItems = [
  { icon: 'home', label: 'Home', route: routes.HOME },
  { icon: 'location arrow', label: 'Reset Location', route: '', action: actions.REGEO },
  { icon: 'marker', label: 'Show Location', route: '', action: actions.SHOWGEO },
  { icon: 'creative commons', label: 'Open Data Licence', route: routes.OPENDATA },
  { icon: 'copyright', label: 'Licence', route: routes.LICENCE },
  { icon: 'github', label: 'Source Code', route: routes.SOURCE },
  { icon: 'twitter', label: 'Twitter Bot', route: routes.TWITTERBOT },
  { icon: 'twitter square', label: 'Twitter Bot Help', route: routes.TWITTERHELP },
  { icon: 'help circle', label: 'Help', route: routes.HELP },
  { icon: 'info', label: 'Info', route: routes.INFO }
]

// speed dial menu for main UX
const speedDialMenuItems = [
  { icon: null, img: 'images/phoicon_white_34x34.png', label: ' Pho', route: routes.PHO },
  { icon: 'search', label: 'Search', route: routes.SEARCH },
  { icon: 'map', label: 'Map', route: routes.MAP },
  { icon: 'columns', label: 'List', route: routes.LIST }
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
