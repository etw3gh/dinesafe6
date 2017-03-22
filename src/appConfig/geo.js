/*
Config and helpers for geolocation
*/
export class Geo {

    // Determines if a toastr (Pop / pop.js) message will be shown
    // upon successful aquisition of geoloaction data
    static INIT = false;
    static REFRESH = true;

    static locSet = (lat, lng) => {
      return `<h3>Location Set</h3>(${lat}, ${lng})`;
    }

    static currentLoc = (lat, lng) => {
      return `<h3>Current Location</h3>(${lat}, ${lng})`;
    }
    
    static badGeoNav = () => {
      return 'Geolocation failed';
    }
}
