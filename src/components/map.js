import React, { Component } from 'react'


export class Map extends Component {
  render () {
    return (
      <div>
      <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
    async defer></script>
      </div>
    )
  }
}
