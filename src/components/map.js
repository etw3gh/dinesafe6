import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps'

const params = {v: '3.exp', key: 'AIzaSyCdinz1pQt3FnKYLmU1E14lkMGmSOcqUek'}

export class MapWrap extends Component {

  state = {mWidth: 400, mHeight: 400, lat: 43.6666, lng: -79.4686, z: 8, c: 'Content Placeholder', l: 'Loading...'}



  onMapCreated = (map) => {
    map.setOptions({
      disableDefaultUI: true
    })
  }

  onDragEnd = (e) => {
    console.log('onDragEnd', e)
  }

  onCloseClick = () => {
    console.log('onCloseClick')
  }

  onClick = (e) => {
    console.log('onClick', e)
  }

  render() {
    const lat = this.state.lat
    const lng = this.state.lng
    const w = `${this.state.mWidth}px`
    const h = `${this.state.mHeight}px`
    const z = this.state.z
    const c = this.state.c
    const l = this.state.l
    return (
      <Gmaps width={w} height={h} lat={lat} lng={lng} zoom={z} loadingMessage={l} params={params} onMapCreated={this.onMapCreated}>
        <Marker lat={lat} lng={lng} draggable={true} onDragEnd={this.onDragEnd} />
        <InfoWindow lat={lat} lng={lng} content={c} onCloseClick={this.onCloseClick} />
        <Circle lat={lat} lng={lng} radius={500}  onClick={this.onClick} />
      </Gmaps>
    )
  }
}
