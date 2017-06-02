import React, { Component } from 'react'
import { Range } from 'react-onsenui'
import { Gmaps, Marker } from 'react-gmaps'
import { store } from './main'
import { actions } from '../appConfig/actions'
import { Pop } from '../classes/pop'
import { Urls } from '../appConfig/urls'
import { sliders, LIMIT } from '../appConfig/controls'

let axios = require('axios')

const params = {v: '3.exp', key: 'AIzaSyCdinz1pQt3FnKYLmU1E14lkMGmSOcqUek'}

export class MapWrap extends Component {

  state = { venues: [], v: sliders.venues.val, h: sliders.map.height.val, z: sliders.map.zoom.val }

  componentDidMount = () => {
    // get the max number of venues
    // show only v venues
    // the user can adjust the slider betwen max and min
    // this will not trigger an ajax call
    // a slice is displayed to the user
    this.getNearVenues(LIMIT)
  }

  getNearVenues = limit => {
    const geo = store.getState().app.geo;
    const url = Urls.nearUrlGen(geo.lat, geo.lng, limit)
    axios.get(url).then( (res) => {
      // store the entire response in redux store
      store.dispatch( { type: actions.NEAR, venues: res.data } )

      Pop.INFO(`found ${res.data.length} nearby venues`)
      // grab a slice and set in state
      // only the slice is visible to the user
      const vslice = this.getSlice(this.state.v)
      this.setState( { venues: vslice } )

    }).catch( e => Pop.ERR(e) )
  }

  getSlice = n => {
    return store.getState().app.nearVenues.slice(0, n)
  }

  onMapCreated = map => {
    map.setOptions( { disableDefaultUI: true } )
  }

  onDragEnd = e => { console.log('onDragEnd', e) }

  onCloseClick = () => { console.log('onCloseClick') }

  onClick = e => { console.log('onClick', e) }

  zoom = e => {
    const zint = parseInt(e.target.value)
    this.setState( { z: zint } )
  }

  height = e => {
    const hint = parseInt(e.target.value)
    this.setState( { h: hint } )
  }

  venues = e => {
    const vint = parseInt(e.target.value)
    this.setState( { v: vint } )
    const vslice = store.getState().app.nearVenues.slice(0, vint)
    this.setState( { venues: vslice } )
  }
  clk = (e) => {
    console.log('click home')
  }
  render() {
    const lat = store.getState().app.geo.lat
    const lng = store.getState().app.geo.lng
    const h = `${this.state.h}px`
    const hmin = sliders.map.height.min
    const hmax = sliders.map.height.max

    const z = this.state.z
    const zmin = sliders.map.zoom.min
    const zmax = sliders.map.zoom.max

    const l = 'Loading...'

    const v = this.state.v
    const vmin = sliders.venues.min
    const vmax = sliders.venues.max

    const sw = sliders.styles.sliderW

    const markers = this.state.venues.map( (venue) => {
      let key = `marker_${venue.eid}`
      return <Marker key={key} lat={venue.lat} lng={venue.lng} draggable={false}  />
    })
    const homeMarker =
      <Marker title='HOME' click={this.clk} lat={lat} lng={lng} draggable={true} onDragEnd={this.onDragEnd} />

    return (
      <div>

        <section className='sec'>
          <Gmaps width='100%' height={h} lat={lat} lng={lng} zoom={z} loadingMessage={l} params={params} onMapCreated={this.onMapCreated}>
            {homeMarker}
            {markers}
          </Gmaps>
        </section>
        <br /><br />
        <section className='sec'>
          <p>
            <span>Venues: [{v}] </span>
            <Range style={sw} onChange={this.venues} min={vmin} max={vmax} value={v} />
          </p>
        </section>

        <br /><br />

        <section className='sec'>
          <p>
            <span>Height: [{this.state.h}] </span>
            <Range style={sw} onChange={this.height} min={hmin} max={hmax} value={this.state.h} />
          </p>
        </section>

        <br /><br />

        <section className='sec'>
          <p>
            <span>Zoom: [{this.state.z}] </span>
            <Range style={sw} onChange={this.zoom} min={zmin} max={zmax} value={z} />
          </p>
        </section>

      </div>
    )
  }
}
