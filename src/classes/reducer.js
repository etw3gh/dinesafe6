import { actions } from '../appConfig/actions'




let reducer = (state, action) => {

  if (action.type === actions.GEO) {
    let localState = Object.assign({}, state);
    localState.app.geo.lat = action.lat;
    localState.app.geo.lng = action.lng;
    localState.app.doRefreshGeo = false;
    localState.app.doShowGeo = false;
    return localState;
  }
  else if (action.type === actions.REGEO) {
    let localState = Object.assign({}, state);
    localState.app.doRefreshGeo = action.do;
    return localState;
  }
  else if (action.type === actions.SHOWGEO) {
    let localState = Object.assign({}, state);
    localState.app.doShowGeo = action.do;
    return localState;
  }
  else if (action.type === actions.SETVIEW) {
    let localState = Object.assign({}, state);
    localState.app.view = action.view;
    localState.app.doRefreshGeo = false;
    localState.app.doShowGeo = false;
    return localState;
  }
  else if (action.type === actions.PHO) {
    let localState = Object.assign({}, state);
    localState.app.phoVenues = action.venues;
    localState.app.doRefreshGeo = false;
    localState.app.doShowGeo = false;
    return localState;
  }
  else {
    return state;
  }
}
export { reducer }
