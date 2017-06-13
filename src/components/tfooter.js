import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
const uuidV4 = require('uuid/v4');
/*
props: cellData = [cell0Data, cell0Data]
props padding = 2
will result in a footer with the first 2 cells populated and the last 2 cells blank
*/
export class TableF extends Component {
  render() {
    let cellPadding = new Array(this.props.padding)
    cellPadding.fill('', 0)
    const footerCells = this.props.cellData.concat(cellPadding)

    const cells = footerCells.map( (cell) => {
      const key = uuidV4()
      return <Table.HeaderCell key={key}>{cell}</Table.HeaderCell>
    })
    return (
        <Table.Footer>
          <Table.Row>
            {cells}
          </Table.Row>
        </Table.Footer>
    )
  }
}
