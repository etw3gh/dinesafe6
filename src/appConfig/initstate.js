//Initial state for the reducer

export const initialState = {
  geoLoaded: false,
  app: {
    vid: null,
    currentVenue: null,
    inspections: [],
    geo: { lat: -1, lng: -1},
    doRefreshGeo: false,
    doShowGeo: false,
    phoVenues: [],
    commits: [],
    nearVenues: []      // nearby without search term
  },
  screen: {
    initH: null,
    initW: null,
    lastH: -1,
    lastW: -1
  }
}
