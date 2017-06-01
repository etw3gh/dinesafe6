import { views } from './views'

/*
Initial state for the reducer
*/
export const initialState = {
  app: {
    view: views.HOME,
    geo: { lat: -1, lng: -1},
    doRefreshGeo: false,
    doShowGeo: false,
    phoVenues: [],
    nearbyVenues: [],   // nearby with search term
    nearVenues: []      // nearby without search term
  },
  screen: {
    initH: null,
    initW: null,
    lastH: -1,
    lastW: -1
  }
}
