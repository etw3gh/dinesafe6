import React, { Component } from 'react'
import { Range } from 'react-onsenui'
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps'
import { store } from './main'

const params = {v: '3.exp', key: 'AIzaSyCdinz1pQt3FnKYLmU1E14lkMGmSOcqUek'}

export class MapWrap extends Component {

  state = {wmin:100, wmax:900, wval:400, hmin:200, hmax:620, hval:300, zmin: 10, zmax: 18, z: 15, c: 'Your Location', l: 'Loading...'}


  componentDidMount = () => {
  }
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
  zoom = (e) => {
    const zint = parseInt(e.target.value)
    this.setState( { z: zint } )
  }
  height = (e) => {
    const hint = parseInt(e.target.value)
    this.setState( { hval: hint } )
  }
  render() {
    const lat = store.getState().app.geo.lat
    const lng = store.getState().app.geo.lng

    const h = `${this.state.hval}px`
    const hmin = this.state.hmin
    const hmax = this.state.hmax

    const z = this.state.z
    const zmin = this.state.zmin
    const zmax = this.state.zmax

    const c = this.state.c
    const l = this.state.l

    const hrstyle = {width: '80%'}

    return (
      <div>

        <section className='sec'>
          <Gmaps width='100%' height={h} lat={lat} lng={lng} zoom={z} loadingMessage={l} params={params} onMapCreated={this.onMapCreated}>
            <Marker lat={lat} lng={lng} draggable={true} onDragEnd={this.onDragEnd} />
            <InfoWindow lat={lat} lng={lng} content={c} onCloseClick={this.onCloseClick} />
            <Circle lat={lat} lng={lng} radius={500}  onClick={this.onClick} />
          </Gmaps>
        </section>

        <hr style={hrstyle} />

        <section className='sec'>
          <p>
            <span>{hmin}</span>
            <Range onChange={this.height} min={hmin} max={hmax} value={this.state.hval} />
            <span>{hmax}</span>
          </p>
          <p>
            Height: {this.state.hval}
          </p>
        </section>

        <hr style={hrstyle} />

        <section className='sec'>
          <p>
            <span>{zmin}</span>
            <Range onChange={this.zoom} min={zmin} max={zmax} value={this.state.z} />
            <span>{zmax}</span>
          </p>
          <p>
            Zoom: {this.state.z}
          </p>
        </section>

        <hr style={hrstyle} />

      </div>
    )
  }
}
