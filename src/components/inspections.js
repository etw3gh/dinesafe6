import React, { Component } from 'react'
import { store } from './main'
import { actions } from '../appConfig/actions'
import { Urls } from '../appConfig/urls'
import { Header, Icon, Table } from 'semantic-ui-react'
import { Pop } from '../classes/pop'
import { cap, idify, nodata, getParameterByName } from '../classes/strings'

let axios = require('axios')

export class Inspections extends Component {
  state = { vid: null, address: null, name: null }
  componentDidMount = () => {
    const vid = getParameterByName('vid')
    const address = getParameterByName('address')
    const name = getParameterByName('name')
    this.setState( { vid: vid, address: address, name: name } )

    const url = Urls.inspectionsByVidUrlGen(vid)

    axios.get(url).then( (res) => {
      store.dispatch( { type: actions.SETINSPECTIONS, inspections: res.data } )
    }).catch( e => Pop.ERR(e) )


  }

  render() {
    const inspections = store.getState().app.inspections
    const rows = inspections.map( (i) => {
      const key = `inspection_${i.iid}_${idify(i.created_at)}`
      return (
        <Table.Row key={key}>
          <Table.Cell>{i.status.toUpperCase()}</Table.Cell>
          <Table.Cell singleLine>{i.date}</Table.Cell>
          <Table.Cell>{cap(nodata(i.severity))}</Table.Cell>
          <Table.Cell>{cap(nodata(i.action))}</Table.Cell>
          <Table.Cell>{nodata(i.details)}</Table.Cell>
          <Table.Cell>{cap(nodata(i.outcome))}</Table.Cell>
        </Table.Row>
      )
    })
    return (
      <div>
        <h3>{cap(this.state.name)}</h3>
        <h4>{cap(this.state.address)}</h4>
        <Table className='dataTable' celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell singleLine>Date</Table.HeaderCell>
              <Table.HeaderCell>Severity</Table.HeaderCell>
              <Table.HeaderCell>Action</Table.HeaderCell>
              <Table.HeaderCell>Outcome</Table.HeaderCell>
              <Table.HeaderCell>Details</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {rows}
          </Table.Body>
        </Table>
      </div>
    )
  }
}
