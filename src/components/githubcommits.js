import React, { Component } from 'react'
import { Pop } from '../classes/pop'
import { Urls } from '../appConfig/urls'
import { store } from './main'
import { Header, Icon, Table } from 'semantic-ui-react'

export class GithubCommits extends Component {
  componentDidMount = () => {
    const url = Urls.github
    axios.get(url).then( (res) => {
      // store the entire response in redux store
      store.dispatch( { type: actions.COMMITS, commits: res.data } )

      Pop.INFO(`found ${res.data.length} nearby venues`)
      // grab a slice and set in state
      // only the slice is visible to the user
      const vslice = this.getSlice(this.state.v)
      this.setState( { venues: vslice } )

    }).catch( e => Pop.ERR(e) )
  }
  render() {
    const commits = store.getState().app.commits
    const rows = commits.map( (commit) => {
      return (

      )
    })
    return (
        <Table className='dataTable' celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell singleLine>Name</Table.HeaderCell>
              <Table.HeaderCell width='20px'>Map</Table.HeaderCell>
              <Table.HeaderCell>Address</Table.HeaderCell>
              <Table.HeaderCell>Distance KM</Table.HeaderCell>
              <Table.HeaderCell>Inspections</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {venueTableRows}
          </Table.Body>
        </Table>
    )
  }
}
