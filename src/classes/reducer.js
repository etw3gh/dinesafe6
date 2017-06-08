import { actions } from '../appConfig/actions'

let reducer = (state, action) => {

  if (action.type === actions.GEO) {
    let localState = Object.assign({}, state)
    localState.app.geo.lat = action.lat
    localState.app.geo.lng = action.lng
    localState.geoLoaded = true
    return localState
  }
  else if (action.type === actions.SETVIEW) {
    let localState = Object.assign({}, state)
    localState.app.view = action.view
    return localState
  }
  else if (action.type === actions.PHO) {
    let localState = Object.assign({}, state)
    localState.app.phoVenues = action.venues
    return localState
  }
  else if (action.type === actions.COMMITS) {
    let localState = Object.assign({}, state)
    localState.app.commits = action.commits
    return localState
  }
  else if (action.type === actions.NEAR) {
    let localState = Object.assign({}, state)
    localState.app.nearVenues = action.venues
    return localState
  }
  else if (action.type === actions.INITSCREEN) {
    let localState = Object.assign({}, state)
    localState.screen.initW = action.w
    localState.screen.initH = action.h
    localState.screen.lastW = action.w
    localState.screen.lastH = action.h
    return localState
  }
  else if (action.type === actions.SAVESCREEN) {
    let localState = Object.assign({}, state)
    localState.screen.lastW = action.w
    localState.screen.lastH = action.h
    return localState
  }
  else {
    return state
  }
}
export { reducer }
