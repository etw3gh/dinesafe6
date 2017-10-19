import { store } from '../components/main'
import Pop from './pop'
import actions from '../appConfig/actions'

/*
Config and helpers for geolocation
*/
export default class Geo {

    // Determines if a toastr (Pop / pop.js) message will be shown
    // upon successful aquisition of geoloaction data
    static INIT = false
    static REFRESH = true

    static LOCATION_ACCURACY = 3

    // method to determine if a location has changed significantly
    static hasChanged = (lat, lng) => {

      const L = Geo.LOCATION_ACCURACY

      const storedLoc = store.getState().app.geo

      // round lat lng to 3 decimal places
      const storedLat = storedLoc.lat.toFixed(L)
      const storedLng = storedLoc.lng.toFixed(L)
      if (storedLat !== lat.toFixed(L) || storedLng !== lng.toFixed(L)) {
        return true
      }
      return false
    }

    static locSet = (lat, lng) => {
      return `<h3>Location Set</h3>(${lat}, ${lng})`
    }

    static currentLoc = (lat, lng) => {
      return `<h3>Current Location</h3>(${lat}, ${lng})`
    }

    static badGeoNav = 'Geolocation failed'

    static getLocation = (isRefresh) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( (pos) => {
          var lat = pos.coords.latitude
          var lng = pos.coords.longitude
          store.dispatch( { type: actions.GEO, lat: lat, lng: lng } )
          if (isRefresh || true) { // || true is temporary
            Pop.OK(Geo.locSet(lat, lng))
          }
        }, () => Geo.badGeo())
      }
      else {
        Geo.badGeo()
      }
    }

    static badGeo = () => {
      Pop.ERR(Geo.badGeoNav)
    }
    static showGeo = () => {
      const geo = store.getState().app.geo
      const msg = Geo.currentLoc(geo.lat, geo.lng)
      Pop.INFO(msg)
    }
    static refreshGeo = () => {
      Geo.getLocation(Geo.REFRESH)
    }

}
