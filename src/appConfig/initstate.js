//Initial state for the reducer
import { sliders } from './controls'

const initialState = {
  geoLoaded: false,
  app: {
    vid: null,
    currentVenue: null,
    inspections: [],
    geo: { lat: -1, lng: -1, nlat: -1, nlng: -1},
    doRefreshGeo: false,
    doShowGeo: false,
    phoVenues: [],
    isPho: false,
    commits: [],
    nearVenues: []      // nearby without search term
  },
  map: {
    zoom: sliders.map.zoom.val
  },
  screen: {
    initH: null,
    initW: null,
    lastH: -1,
    lastW: -1
  }
}
export default initialState
