import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Range } from 'react-onsenui'
import { Gmaps, InfoWindow, Marker } from 'react-gmaps'
import { store } from './main'
import { actions } from '../appConfig/actions'
import { routes } from '../appConfig/routes'
import { Pop } from '../classes/pop'
import { Urls } from '../appConfig/urls'
import { sliders, LIMIT } from '../appConfig/controls'
import { Header, Icon, Table } from 'semantic-ui-react'
import { cap } from '../classes/strings'
import { Geo } from '../classes/geo'
import CopyToClipboard from 'react-copy-to-clipboard';

let axios = require('axios')

const params = {v: '3.exp', key: 'AIzaSyCdinz1pQt3FnKYLmU1E14lkMGmSOcqUek'}


/*
a_created_at: "2017-06-10 04:23:41.176953"
a_updated_at: "2017-06-10 04:23:41.176953"
a_version:1491231264
address:"4130 dundas st w"
distance:0.335627657898741
eid:10475219
hi:0
hisuf:""
id:9409
lat:43.6619476221
lng:-79.5077841262
lo:4130
locname:""
losuf:""
mun:"Etobicoke"
name:"patricia's cake creations"
num:"4130"
*/
export class MapWrap extends Component {

  state = { copied: false, venues: [], v: sliders.venues.val, h: sliders.map.height.val, z: sliders.map.zoom.val, readMore: [], allIds: []  }

  componentDidMount = () => {


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
            console.log('no change to location')
            const vslice = this.getSlice(this.state.v)
            this.setState( { venues: vslice } )
          }

        }, (e) => Pop.ERR(`map geoloc error: ${e}`) )
      }
      else {
        Pop.ERR('Geolocation not enabled or blocked')
      }
  }
  toggleReadMore = (id) => {
    let readMore = this.state.readMore
    if (readMore.includes(id)) {
      readMore = this.state.readMore.filter( (element) => {
        return element !== id
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
  populateAllIds = (objs) => {
    let allIds = []
    objs.forEach( (o) => {
      allIds.push(o.eid)
    })
    this.setState( { allIds: allIds } )
  }

  getSlice = (n) => {
    return store.getState().app.nearVenues.slice(0, n)
  }

  getNearVenues = limit => {
    const A = store.getState().app
    const geo = A.geo
    const lat = geo.lat
    const lng = geo.lng

    const url = this.props.isPho ? Urls.phoUrlGen(lat, lng, limit) : Urls.nearUrlGen(lat, lng, limit)

    axios.get(url).then( (res) => {
      store.dispatch( { type: actions.NEAR, venues: res.data } )

      Pop.INFO(`found ${res.data.length} nearby venues`)

      const vslice = this.getSlice(this.state.v)

      this.setState( { venues: vslice } )

      this.populateAllIds(this.state.venues)

    }).catch( e => Pop.ERR(e) )
  }



  onMapCreated = map => {
    map.setOptions( { disableDefaultUI: true } )
  }

  onDragEnd = e => {
    console.log('onDragEnd', e.latLng.lat(), e.latLng.lng())
  }

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
  renderReadMore = (v) => {
    return (
      <ul>
        <li>venue name: {v.name}</li>
        <li>lat, lng: {v.lat}, {v.lng}&nbsp;
          <CopyToClipboard text={`${v.lat}, ${v.lng}`}
            onCopy={() => this.setState({copied: true})}>
            <span><Icon name='copy' /></span>
          </CopyToClipboard>
        </li>
        <li>address_id: {v.address_id}</li>
        <li>address: {v.address}</li>
        <li>eid: {v.eid}</li>
        <li>distance: {v.distance}</li>
        <li>hi: {v.hi}</li>
        <li>hisuf: {v.hisuf}</li>
        <li>lo: {v.lo}</li>
        <li>losuf: {v.losuf}</li>
        <li>locname: {v.locname}</li>
        <li>a_version: {v.a_version}</li>
        <li>a_created_at: {v.a_created_at}</li>
        <li>a_updated_at: {v.a_updated_at}</li>
      </ul>
    )
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
    //console.log(this.state.venues)
    const markers = this.state.venues.map( (v) => {
      let key = `marker_${v.eid}`
      return <Marker key={key} lat={v.lat} lng={v.lng} draggable={false}  />
    })
    const venueTableRows = this.state.venues.map( (v) => {
      let key = `venue_${v.eid}`

      const readMore = this.state.readMore

      const addressData = readMore.includes(v.eid) ? this.renderReadMore(v) : cap(v.address)
      const chevron = readMore.includes(v.eid) ? 'chevron left' : 'chevron right'

      return (
        <Table.Row key={key}>
          <Table.Cell><Header as='h3' textAlign='center'>{cap(v.name)}</Header></Table.Cell>
          <Table.Cell><Icon title={`(${v.lat}, ${v.lng})`} name='camera' /></Table.Cell>
          <Table.Cell><Icon onClick={ () => this.toggleReadMore(v.eid) } name={chevron} />{addressData}</Table.Cell>
          <Table.Cell>{v.distance.toFixed(2)}</Table.Cell>
          <Table.Cell title={v.id}>
            all:
            <Link to={`${routes.INSPECTIONS}?vid=${v.id}&name=${v.name}&address=${v.address}`} >
              <Icon title='all verions' name='info' />
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            latest:
            <Link to={`${routes.INSPECTIONS}?vid=${v.id}&name=${v.name}&address=${v.address}&latest=true`} >
              <Icon title='latest version only' name='arrow up' />
            </Link>
          </Table.Cell>
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
        <h3>({lat.toFixed(5)}, {lng.toFixed(5)})</h3>
        <br />
        <section className='sec'>
          <p>
            <span>Venues: [{parseInt(v)}] </span>
            <Range style={sw} onChange={this.venues} min={vmin} max={vmax} value={v} />
          </p>
        </section>

        <br /><br />

        <section className='sec'>
          <p>
            <span>Height: [{parseInt(this.state.h)}] </span>
            <Range style={sw} onChange={this.height} min={hmin} max={hmax} value={this.state.h} />
          </p>
        </section>

        <Table className='dataTable' celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell singleLine>Name</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell>Address</Table.HeaderCell>
              <Table.HeaderCell>Distance KM</Table.HeaderCell>
              <Table.HeaderCell singleLine>Inspections</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell>{venueTableRows.length} venues</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell singleLine></Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
          <Table.Body>
            {venueTableRows}
          </Table.Body>
        </Table>
      </div>
    )
  }
}
