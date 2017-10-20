import React, { Component } from 'react'
import axios from 'axios'
import { Range } from 'react-onsenui'
import { Gmaps, Marker } from 'react-gmaps'
import { store } from './main'
import actions from '../appConfig/actions'
import routes from '../appConfig/routes'
import Pop from '../classes/pop'
import Urls from '../appConfig/urls'
import sliders, { LIMIT } from '../appConfig/controls'
import { Icon, Table } from 'semantic-ui-react'
import { cap } from '../classes/strings'
import Geo from '../classes/geo'
import { ImagePaths } from '../appConfig/images'
import TableF from './tfooter'
import TableR from './trow'
import VenueReadMore from './vmore'

const params = {v: '3.exp', key: 'AIzaSyCdinz1pQt3FnKYLmU1E14lkMGmSOcqUek'}

export default class MapWrap extends Component {

  state = {
    isPho: false,
    copied: false,
    venues: [],
    v: sliders.venues.val,
    h: sliders.map.height.val,
    z: sliders.map.zoom.val,
    readMore: [],
    allIds: [] }

  componentDidMount = () => {
      const priorState = store.getState().app.isPho
      store.dispatch( { type: actions.ISPHO, isPho: this.props.isPho } )

      if (priorState !== this.props.isPho) {
        this.getNearVenues(LIMIT)
      }

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( (pos) => {
          var lat = pos.coords.latitude
          var lng = pos.coords.longitude
          store.dispatch( { type: actions.GEO, lat: lat, lng: lng } )

          const moved = Geo.hasChanged(lat, lng)
          const noVenues = store.getState().app.nearVenues.length == 0
          if ( moved || noVenues) {
            this.getNearVenues(LIMIT)
          }
          else {
            const vslice = this.getSlice(this.state.v)
            this.setState( { venues: vslice } )
          }
        }, () => {
          this.failgeo()
        })
      }
      else {
        this.failgeo()
      }
  }

  failgeo = () => {
    Pop.WARN('Geolocation failed. Using Default Location...')
    store.dispatch( { type: actions.GEO, lat: 43.6500416063, lng: -79.6035400499 } )
    this.getNearVenues(LIMIT)
  }

  toggleReadMore = id => {
    let readMore = this.state.readMore
    if (readMore.includes(id)) {
      readMore = this.state.readMore.filter( x => {
        return x !== id
      } )
    }
    else {
      readMore.push(id)
    }
    this.setState( { readMore: readMore } )
  }

  colapseAll = () => {
    this.setState( { readMore: [] } )
  }
  expandAll = () => {
    const allIds = this.state.allIds
    this.setState( { readMore: allIds } )
  }
  populateAllIds = objs => {
    let allIds = []
    objs.forEach( (o) => {
      allIds.push(o.eid)
    })
    this.setState( { allIds: allIds } )
  }

  getSlice = n => {
    const nearby = store.getState().app.nearVenues
    return nearby.slice(0, n)
  }

  getNearVenues = limit => {
    const A = store.getState().app
    const geo = A.geo
    const lat = geo.lat
    const lng = geo.lng
    const phoUrl = Urls.phoUrlGen(lat, lng, limit)
    const nearUrl = Urls.nearUrlGen(lat, lng, limit)
    const url = this.props.isPho ? phoUrl : nearUrl

    axios.get(url).then( (res) => {
      store.dispatch( { type: actions.NEAR, venues: res.data } )
      const vslice = this.getSlice(this.state.v)
      const nlat = vslice[0].lat
      const nlng = vslice[0].lng
      store.dispatch( { type: actions.NGEO, nlat: nlat, nlng: nlng } )
      this.setState( { venues: vslice } )
      this.populateAllIds(this.state.venues)
      Pop.INFO(`Showing ${vslice.length} nearby venues`)
    }).catch( e => Pop.ERR(e) )
  }

  onMapCreated = map => {
    map.setOptions( { disableDefaultUI: true } )
  }

  onDragEnd = e => {
    const lat = e.latLng.lat()
    const lng = e.latLng.lng()
    //console.log('onDragEnd', lat, lng)
    const moved = Geo.hasChanged(lat, lng)
    const noVenues = store.getState().app.nearVenues.length == 0
    if ( moved || noVenues) {
      store.dispatch( { type: actions.GEO, lat: lat, lng: lng } )
      this.getNearVenues(LIMIT)
    }
  }

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

  clickMarker = v => {
    const iParams = `?vid=${v.id}&name=${v.name}&address=${v.address}`
    const iUrl = `${Urls.linkToInspections}${iParams}`
    window.open(iUrl, '_blank')
  }

  render() {
    const lat = store.getState().app.geo.nlat
    const lng = store.getState().app.geo.nlng
    const h = `${this.state.h}px`
    const hmin = sliders.map.height.min
    const hmax = sliders.map.height.max
    const z = this.state.z
    const l = 'Loading...'
    const v = this.state.v
    const vmin = sliders.venues.min
    const vmax = sliders.venues.max
    const sw = sliders.styles.sliderW
    const venues = this.state.venues

    const markers = venues.map( v => {
      let key = `marker_${v.eid}`
      return (
        <Marker
         title={v.name}
         onClick={() => this.clickMarker(v)}
         key={key}
         lat={v.lat}
         lng={v.lng}
         draggable={false} /> )
    })
    const venueTableRows = venues.map( v => {
      const key = `venue_${v.eid}`
      const readMore = this.state.readMore
      const hasVid = readMore.includes(v.eid)
      const addressData = hasVid ? <VenueReadMore venue={v} /> : cap(v.address)
      const chevron = hasVid ? 'chevron left' : 'chevron right'
      const iParams = `?vid=${v.id}&name=${v.name}&address=${v.address}`
      const iLocal = `${routes.INSPECTIONS}${iParams}`
      const iUrl = `${Urls.linkToInspections}${iParams}`

      return <TableR
        key={key}
        venue={v}
        chevron={chevron}
        addressData={addressData}
        iLoc={iLocal}
        iUrl={iUrl}
        toggleReadMore={this.toggleReadMore}/>
    })
    const homeMarker =(<Marker
      title='HOME'
      animation='DROP'
      icon={ImagePaths.currentLocIcon}
      click={this.clk}
      lat={lat} lng={lng}
      draggable={true}
      onDragEnd={this.onDragEnd} /> )

    //const homeInfoWindow = <InfoWindow lat={lat} lng={lng} content={'Current Location'} />
    const noloc = (Math.abs(lat) === 1 || Math.abs(lng) === 1)

    const noLocHeader = (
      <h3>
        Location loading
        <Icon
          loading
          name='spinner'
          color='green' />
      </h3> )

    const hasLocHeader = (
      <div>
        <h4>
         ({lat.toFixed(5)}, {lng.toFixed(5)})
         <br />
         Drag the location icon to update results
         <br />
         Click a marker to open inspections in a new tab
        </h4>
      </div> )

    const positionHeader = noloc ? noLocHeader : hasLocHeader

    const renderGmap = (<Gmaps
      width='100%'
      height={h}
      lat={lat}
      lng={lng}
      zoom={z}
      loadingMessage={l}
      params={params}
      onMapCreated={this.onMapCreated} >
      {homeMarker}
      {markers} ></Gmaps>)
    const mapLoading = (
      <h2>
        Map Loading: <Icon loading name='spinner' color='green' size='huge' />
      </h2> )
    const gmaps = this.state.venues.length > 0 ? renderGmap : mapLoading

    return (
      <div>
        <section className='sec'>{gmaps}</section>
        <br />
        {positionHeader}
        <br />
        <section className='sec'>
          <p>
            <span>Venues: [{parseInt(v)}] </span>
            <Range
              style={sw}
              onChange={this.venues}
              min={vmin}
              max={vmax}
              value={v} />
          </p>
        </section>

        <br /><br />

        <section className='sec'>
          <p>
            <span>Height: [{parseInt(this.state.h)}] </span>
            <Range
              style={sw}
              onChange={this.height}
              min={hmin}
              max={hmax}
              value={this.state.h} />
          </p>
        </section>

        <Table className='dataTable' celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell singleLine>Name</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell>Address</Table.HeaderCell>
              <Table.HeaderCell>Distance</Table.HeaderCell>
              <Table.HeaderCell>Yelp</Table.HeaderCell>
              <Table.HeaderCell>Inspections</Table.HeaderCell>
              <Table.HeaderCell>Copy Link</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {venueTableRows}
          </Table.Body>
          <TableF
           cellData={[`${venueTableRows.length} venues`]}
           padding={6} />
        </Table>
      </div>
    )
  }
}
