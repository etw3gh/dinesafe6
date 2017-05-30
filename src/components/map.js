import React, { Component } from 'react'
import { GoogleApiComponent } from './GoogleApiComponent'
// apiKey: 'AIzaSyCdinz1pQt3FnKYLmU1E14lkMGmSOcqUek'
export class MapWrap extends Component {
  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    }

    if (!this.props.loaded) {
      return (<div>Loading...</div>)
    }

    return (
      <div style={style}>
        <Map google={this.props.google} />
      </div>
    )
  }
}

export default GoogleApiComponent({
  apiKey: 'AIzaSyCdinz1pQt3FnKYLmU1E14lkMGmSOcqUek'
})(MapWrap)


export class Map extends Component {
  loadMap = () => {
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);
      let zoom = 14;
      let lat = 37.774929;
      let lng = -122.419416;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);
    }
  }
  render() {
    return (
      <div ref='map'>
        Loading map...
      </div>
    )
  }
}
