import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Header, Icon, Table } from 'semantic-ui-react'
import ClipLink from './clip'
import { cap } from '../classes/strings'

export default class TableR extends Component {
  render() {
    const P = this.props
    const v = P.venue
    return (
      <Table.Row>
        <Table.Cell>
          <Header
            as='h3'
            textAlign='center'>
            {cap(v.name)}
          </Header>
        </Table.Cell>
        <Table.Cell>
          <Icon
            title={`(${v.lat}, ${v.lng})`}
            name='camera' />
        </Table.Cell>
        <Table.Cell>
          <Icon
            onClick={ () => P.toggleReadMore(v.eid) }
            name={P.chevron} />
          {P.addressData}
        </Table.Cell>
        <Table.Cell>
          {v.distance.toFixed(2)} KM
        </Table.Cell>
        <Table.Cell title={v.id}>
          <Link to={P.iLoc} >
            <Icon title='all verions' size='large' name='info' />
          </Link>
        </Table.Cell>
        <Table.Cell>
          <ClipLink
            pop={true}
            text={P.iUrl} />
        </Table.Cell>
      </Table.Row>
    )
  }
}
