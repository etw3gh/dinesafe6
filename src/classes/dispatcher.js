import { actions } from '../appConfig/actions'
import { store } from '../components/dinesafemain'
import { views } from '../appConfig/views'

/*
Sets the view by dispatching an action to the reducer
*/
export class Dispatch {
  static menu = (v) => {
    if (v === views.INFO) {
      store.dispatch( { type: actions.SETVIEW, view: views.INFO } )
    }
    else if (v === views.HELP) {
      store.dispatch( { type: actions.SETVIEW, view: views.HELP } )
    }
    else if (v === views.HOME) {
      store.dispatch( { type: actions.SETVIEW, view: views.HOME } )
    }
    else if (v === views.LIST) {
      store.dispatch( { type: actions.SETVIEW, view: views.LIST } )
    }
    else if (v === views.MAP) {
      store.dispatch( { type: actions.SETVIEW, view: views.MAP } )
    }
    else if (v === views.REGEO) {
      store.dispatch( { type: actions.SETVIEW, view: views.REGEO } )
    }
    else if (v === views.SHOWGEO) {
      store.dispatch( { type: actions.SETVIEW, view: views.SHOWGEO } )
    }
    else if (v === views.PHO) {
      store.dispatch( { type: actions.SETVIEW, view: views.PHO } )
    }
    else if (v === views.SEARCH) {
      store.dispatch( { type: actions.SETVIEW, view: views.SEARCH } )
    }
    else if (v === views.TWITTERBOT) {
      store.dispatch( { type: actions.SETVIEW, view: views.TWITTERBOT } )
    }
    else if (v === views.TWITTERHELP) {
      store.dispatch( { type: actions.SETVIEW, view: views.TWITTERHELP } )
    }
    else if (v === views.OPENDATA) {
      store.dispatch( { type: actions.SETVIEW, view: views.OPENDATA } )
    }
    else if (v === views.LICENCE) {
      store.dispatch( { type: actions.SETVIEW, view: views.LICENCE } )
    }
    else if (v === views.SOURCE) {
      store.dispatch( { type: actions.SETVIEW, view: views.SOURCE } )
    }
    else {
      store.dispatch( { type: actions.SETVIEW, view: views.HOME } )
    }
  }
}
