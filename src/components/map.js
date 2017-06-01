import React, { Component } from 'react'
import { Range } from 'react-onsenui'
import { Gmaps, Marker } from 'react-gmaps'
import { store } from './main'
import { actions } from '../appConfig/actions'
import { Pop } from '../classes/pop'
import { Urls } from '../appConfig/urls'
let axios = require('axios')

const params = {v: '3.exp', key: 'AIzaSyCdinz1pQt3FnKYLmU1E14lkMGmSOcqUek'}

export class MapWrap extends Component {

  state = {venues:[], vlim:20, vmin:1, vmax:500, wmin:100, wmax:900, wval:400, hmin:200, hmax:620, hval:300, zmin:10, zmax:21, z:15, l: 'Loading...'}


  componentDidMount = () => {
   this.getNearVenues(this.state.vlim)
  }

  getNearVenues = (limit) => {
    const geo = store.getState().app.geo;
    const url = Urls.nearUrlGen(geo.lat, geo.lng, limit)
    axios.get(url).then( (res) => {
      store.dispatch( { type: actions.NEAR, venues: res.data } )
      this.setState( { venues: res.data } )
      console.log(this.state.venues)
    }).catch( (e) => Pop.ERR(e) )
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
  venues = (e) => {
    const vint = parseInt(e.target.value)

    const prevVint = this.state.vlim

    this.setState( { vlim: vint } )

    // only call the server if we need more venues, not less
    // TODO optimize this to reduce ajax calls for back and forth
    if (vint < prevVint) {
      const vslice = this.getState().app.nearVenues.slice(0, vint)
      this.setState( { venues: vslice } )
      console.log('slice'); console.log(this.state.venues)
    }
    else {
      console.log('getnear....')
      this.getNearVenues(this.state.vlim)

    }
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

    const l = this.state.l

    const vlim = this.state.vlim
    const vmin = this.state.vmin
    const vmax = this.state.vmax

    const hrstyle = {width: '80%'}

    return (
      <div>

        <section className='sec'>
          <Gmaps width='100%' height={h} lat={lat} lng={lng} zoom={z} loadingMessage={l} params={params} onMapCreated={this.onMapCreated}>
            <Marker lat={lat} lng={lng} draggable={true} onDragEnd={this.onDragEnd} />
            <Marker lat={lat+.001} lng={lng+.001} draggable={true} onDragEnd={this.onDragEnd} />
            <Marker lat={lat+.002} lng={lng+.002} draggable={true} onDragEnd={this.onDragEnd} />

          </Gmaps>
        </section>

        <hr style={hrstyle} />

        <section className='sec'>
          <p>
            <span>{vmin}</span>
            <Range onChange={this.venues} min={vmin} max={vmax} value={vlim} />
            <span>{vmax}</span>
          </p>
          <p>
            Venues: {vlim}
          </p>
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
            <Range onChange={this.zoom} min={zmin} max={zmax} value={z} />
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
