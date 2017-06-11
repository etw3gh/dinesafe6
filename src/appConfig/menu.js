import { routes } from './routes'
import { actions } from './actions'
import { ImagePaths } from '../appConfig/images'


const FAB_COL = 'yellow'
const HAM_COL = 'black'
// hamburger menu for admin stuff
const menuItems = [
  { icon: 'sidebar', label: '', route: null, action: actions.CLOSEMENU, color: HAM_COL },
  { icon: 'home', label: 'Home', route: routes.HOME, action: null, color: FAB_COL },
  { icon: 'map', label: 'Map', route: routes.MAP, action: null, color: FAB_COL },
  { icon: null, img: ImagePaths.phoIcon, label: ' Pho', route: routes.PHO, action: null, color: FAB_COL },
  { icon: 'search', label: 'Search', route: routes.SEARCH, action: null, color: FAB_COL },
  { icon: 'columns', label: 'List', route: routes.LIST, action: null, color: FAB_COL },
  { icon: 'creative commons', label: 'Open Data Licence', route: routes.OPENDATA, action: null, color: HAM_COL },
  { icon: 'copyright', label: 'Licence', route: routes.LICENCE, action: null, color: HAM_COL },
  { icon: 'github', label: 'Source Code', route: routes.SOURCE, action: null, color: HAM_COL },
  { icon: 'twitter', label: 'Twitter Bot', route: routes.TWITTERBOT, action: null, color: HAM_COL },
  { icon: 'twitter square', label: 'Twitter Bot Help', route: routes.TWITTERHELP, action: null, color: HAM_COL },
  { icon: 'help circle', label: 'Help', route: routes.HELP, action: null, color: HAM_COL },
  { icon: 'location arrow', label: 'Reset Location', route: null, action: actions.REGEO, color: HAM_COL },
  { icon: 'marker', label: 'Show Location', route: null, action: actions.SHOWGEO, color: HAM_COL }
]

export const hamburgerMenu = {
  showLabels: true,
  items: menuItems,
  iconSize: 'mini'
}
