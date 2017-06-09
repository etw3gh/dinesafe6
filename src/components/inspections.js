import React, { Component } from 'react'
import { Icon, Table } from 'semantic-ui-react'
import { store } from './main'
import { actions } from '../appConfig/actions'
import { NODATA, statusConfig, severityConfig } from '../appConfig/inspectionconfg'
import { Urls } from '../appConfig/urls'
import { Pop } from '../classes/pop'
import { cap, idify, nodata, getParameterByName, lastWord } from '../classes/strings'
import { StatusLabel } from './statuslabel'
import { SimpleModal } from './simplemodal'


let axios = require('axios')

export class Inspections extends Component {
  state = { latest: null, vid: null, address: null, name: null, fullDetails: '', modalOpen: false }
  componentDidMount = () => {
    const vid = getParameterByName('vid')
    const address = getParameterByName('address')
    const name = getParameterByName('name')
    const latest = getParameterByName('latest')
    this.setState( { vid: vid, address: address, name: name, latest: latest } )

    const url = latest ? Urls.inspectionsByVidLatestVersionUrlGen(vid) : Urls.inspectionsByVidUrlGen(vid)

    axios.get(url).then( (res) => {
      store.dispatch( { type: actions.SETINSPECTIONS, inspections: res.data } )
    }).catch( e => Pop.ERR(e) )


  }

  /*
   inspections table columns
   id,rid,eid,iid,etype,status,details,date,severity,action,outcome,mipy,version,venue_id,created_at,updated_at
  */
  openModal = (i) => {
    this.setState( { fullDetails: i, modalOpen: true } )
  }

  closeModal = () => {
    this.setState( { modalOpen: false } )
  }

  renderModalTable = () => {
    const i = this.state.fullDetails

    if (i === '') return (<div>details not available</div>)

    return (
      <Table className='dataTable' celled compact selectable striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>(db) id</Table.HeaderCell>
            <Table.HeaderCell>iid</Table.HeaderCell>
            <Table.HeaderCell>rid</Table.HeaderCell>
            <Table.HeaderCell>eid</Table.HeaderCell>
            <Table.HeaderCell>status</Table.HeaderCell>
            <Table.HeaderCell>details</Table.HeaderCell>
            <Table.HeaderCell>date</Table.HeaderCell>
            <Table.HeaderCell>severity</Table.HeaderCell>
            <Table.HeaderCell>action</Table.HeaderCell>
            <Table.HeaderCell>outcome</Table.HeaderCell>
            <Table.HeaderCell>min inspections/yr</Table.HeaderCell>
            <Table.HeaderCell>version</Table.HeaderCell>
            <Table.HeaderCell>venue_id</Table.HeaderCell>
            <Table.HeaderCell>created_at</Table.HeaderCell>
            <Table.HeaderCell>updated_at</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Row>
          <Table.Cell>{i.id}</Table.Cell>
          <Table.Cell>{i.iid}</Table.Cell>
          <Table.Cell>{i.rid}</Table.Cell>
          <Table.Cell>{i.eid}</Table.Cell>
          <Table.Cell>{i.status}</Table.Cell>
          <Table.Cell>{i.details}</Table.Cell>
          <Table.Cell>{i.date}</Table.Cell>
          <Table.Cell>{i.severity}</Table.Cell>
          <Table.Cell>{i.action}</Table.Cell>
          <Table.Cell>{i.outcome}</Table.Cell>
          <Table.Cell>{i.mipy}</Table.Cell>
          <Table.Cell>{i.version}</Table.Cell>
          <Table.Cell>{i.venue_id}</Table.Cell>
          <Table.Cell>{i.created_at}</Table.Cell>
          <Table.Cell>{i.updated_at}</Table.Cell>
        </Table.Row>
      </Table>
    )
  }


  render() {
    const inspections = store.getState().app.inspections
    const rows = inspections.map( (i) => {
      const key = `inspection_${i.iid}_${idify(i.created_at)}`

      const severityText = cap(nodata(i.severity.trim()))
      const severityFirstChar = severityText[0]
      const severityCfg = severityConfig[severityFirstChar]
      const severityFinalText = severityFirstChar === 'N' ? 'NA' : lastWord(severityText).replace(NODATA, 'OK')

      const statusText = i.status.toUpperCase().trim()
      const statusCfg = statusConfig[statusText]

      return (
        <Table.Row key={key}>
          <Table.Cell onClick={ () => this.openModal(i) }><Icon name='chain' />{i.iid}</Table.Cell>
          <Table.Cell>{i.version}</Table.Cell>
          <Table.Cell><StatusLabel text={statusText} config={statusCfg} /></Table.Cell>
          <Table.Cell singleLine>{i.date}</Table.Cell>
          <Table.Cell singleLine><StatusLabel text={severityFinalText} config={severityCfg} /></Table.Cell>
          <Table.Cell>{cap(nodata(i.action))}</Table.Cell>
          <Table.Cell>{cap(nodata(i.details))}</Table.Cell>
          <Table.Cell>{cap(nodata(i.outcome))}</Table.Cell>
        </Table.Row>
      )
    })
    return (
      <div>
        <SimpleModal bg='#222' show={ this.state.modalOpen } onClose={ this.closeModal }>
          {this.renderModalTable()}
        </SimpleModal>
        <h3>{cap(this.state.name)}</h3>
        <h4>{cap(this.state.address)}</h4>
        <Table className='dataTable' celled padded selectable striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Inspection ID</Table.HeaderCell>
              <Table.HeaderCell>Version</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell singleLine>Date</Table.HeaderCell>
              <Table.HeaderCell singleLine>Severity</Table.HeaderCell>
              <Table.HeaderCell>Action</Table.HeaderCell>
              <Table.HeaderCell>Details</Table.HeaderCell>
              <Table.HeaderCell>Outcome</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {rows}
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell>{rows.length} inspections</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    )
  }
}
