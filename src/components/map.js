import React, { Component } from 'react'
import { Range } from 'react-onsenui'
import { Gmaps, InfoWindow, Marker } from 'react-gmaps'
import { store } from './main'
import { actions } from '../appConfig/actions'
import { Pop } from '../classes/pop'
import { Urls } from '../appConfig/urls'
import { sliders, LIMIT } from '../appConfig/controls'
import { Header, Table } from 'semantic-ui-react'


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
    const A = store.getState().app
    const geo = A.geo
    console.log(A.geo)
    console.log(A.geo.lat, A.geo['lng'])
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

    const l = 'Loading...'

    const v = this.state.v
    const vmin = sliders.venues.min
    const vmax = sliders.venues.max

    const sw = sliders.styles.sliderW

    const markers = this.state.venues.map( (v) => {
      let key = `marker_${v.eid}`
      return <Marker key={key} lat={v.lat} lng={v.lng} draggable={false}  />
    })
    const venueTableRows = this.state.venues.map( (v) => {
      let key = `venue_${v.eid}`
      return (
        <Table.Row key={key}>
          <Table.Cell><Header as='h3' textAlign='center'>{v.name}</Header>
          </Table.Cell>
          <Table.Cell singleLine>{v.lat}, {v.lng}</Table.Cell>
          <Table.Cell textAlign='right'>{v.address}</Table.Cell>
          <Table.Cell>{v.distance.toFixed(2)}</Table.Cell>
        </Table.Row>
      )
    })

    const homeMarker =
      <Marker title='HOME' click={this.clk} lat={lat} lng={lng} draggable={true} onDragEnd={this.onDragEnd} />

    const homeInfoWindow =
      <InfoWindow lat={lat} lng={lng} content={'Current Location'} />

    return (
      <div>

        <section className='sec'>
          <Gmaps width='100%' height={h} lat={lat} lng={lng} zoom={z} loadingMessage={l} params={params} onMapCreated={this.onMapCreated}>
            {homeMarker}
            {homeInfoWindow}
            {markers}
          </Gmaps>
        </section>
        <br />
        <h3>({lat}, {lng})</h3>
        <br />
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

        <Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell singleLine>Name</Table.HeaderCell>
              <Table.HeaderCell>Map</Table.HeaderCell>
              <Table.HeaderCell>Address</Table.HeaderCell>
              <Table.HeaderCell>Distance KM</Table.HeaderCell>
              <Table.HeaderCell>Comments</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {venueTableRows}
          </Table.Body>
        </Table>
      </div>
    )
  }
}
