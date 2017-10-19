import React, { Component } from 'react'
import Clip from './clip'

export default class VenueReadMore extends Component {
  render() {
    const v = this.props.venue
    return (
      <ul>
        <li>venue name: {v.name}</li>
        <li>lat, lng: {v.lat}, {v.lng}&nbsp;
          <Clip text={`${v.lat}, ${v.lng}`} />
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
}
