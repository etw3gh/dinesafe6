import { Urls } from '../data/urls.js'
import { actions } from '../classes/app_config'
import { store } from './dinesafemain'
let axios = require('axios')
import React, { Component } from 'react'

export class Pho extends Component {
  componentDidMount = () => {
    const geo = store.getState().app.geo;
    const phourl = `${Urls.heroku.pho.near}lat=${geo.lat}&lng=${geo.lng}&limit=500`;
    axios.get(phourl).then( (res) => {
      store.dispatch( { type: actions.PHO, venues: res.data } )
    })
  }
  render() {
    const phovenues = store.getState().app.phoVenues;

    const phos = phovenues.map( (venue) => {
      const partialFilename =  `/images/pho/${venue.eid}`;
      const pngImg = `${partialFilename}.png`;

      return (
        <div key={'pho_' + venue.id}>
          <div >
            Distance: {venue.distance.toFixed(2)} KM<br />
            <figure>
              <img width="160px" height="120px" src={pngImg} />
              <figcaption>eid: {venue.eid}, id: {venue.id} | {venue.name}</figcaption>
            </figure>
            <h4>{venue.address}, {venue.mun}</h4>
            <h5>({venue.lat}, {venue.lng})</h5>
          </div>
          <hr /><br />
        </div>
      )
    });

    return <div><h2>Nearby Pho</h2>{phos}</div>;
  }
}
