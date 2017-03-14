import { actions } from './app_config'

let reducer = (state, action) => {
  if (action.type === actions.GEO){
    console.log('geo action');
    let localState = Object.assign({}, state);
    localState.app.geo.lat = action.lat;
    localState.app.geo.lng = action.lng;
    return localState;
  }
  else if (action.type === actions.SETVIEW) {
    console.log('reducer|setview')
    let localState = Object.assign({}, state);
    localState.app.view = action.view;
    return localState;
  }
  else if (action.type === actions.PHO) {
    let localState = Object.assign({}, state);
    localState.app.phoVenues = action.venues;
    return localState;
  }
  else {
    return state;
  }
}
export { reducer }
