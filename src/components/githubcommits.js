import React, { Component } from 'react'
import { Pop } from '../classes/pop'
import { niceDate, stripSingles } from '../classes/strings'
import { actions } from '../appConfig/actions'
import { Urls } from '../appConfig/urls'
import { store } from './main'
import { SimpleModal } from './simplemodal'
import { Icon, Table } from 'semantic-ui-react'
import { SimpleCard } from './card'

let axios = require('axios')

require('semantic-ui/dist/semantic.min.css')
require('../styles/modal.css')

export class GithubCommits extends Component {
  state = {commitModalOpen: false, githubUserModalOpen: false, cardData: {}, allRows: []}
  componentDidMount = () => {
    const url = Urls.github
    axios.get(url).then( (res) => {
      store.dispatch( { type: actions.COMMITS, commits: res.data } )
    }).catch( e => Pop.ERR(e) )
  }

  openCommitModal = (c) => {
    const cardData = {
      img: c.author.avatar_url,
      header: c.author.login,
      link: c.html_url,
      linkText: c.sha.substr(0, 7),
      desc: stripSingles(c.commit.message),
      extraIcon: 'calendar',
      extraText: niceDate(c.commit.author.date)
    }
    this.setState( { commitModalOpen: true, cardData: cardData } )
  }
  openGithubUserModal = () => {
    this.setState( { githubUserModalOpen: true } )
  }
  closeModals = () => {
    this.setState( { githubUserModalOpen: false, commitModalOpen: false } )
  }

  render() {
    const commits = store.getState().app.commits
    const rows = commits.map( (c) => {

      return (
        <Table.Row key={`commit_sha_${c.sha}`}>
         <Table.Cell onClick={ () => this.openCommitModal(c) } ><Icon name='github' /></Table.Cell>
          <Table.Cell>{stripSingles(c.commit.message)}</Table.Cell>
          <Table.Cell>{niceDate(c.commit.author.date)}</Table.Cell>
          <Table.Cell><a href={`${c.author.html_url}?tab=repositories`} target='_blank'>{c.author.login}</a></Table.Cell>
        </Table.Row>
      )
    })
    return (
        <div>
        <SimpleModal bg='#222' show={ this.state.commitModalOpen } onClose={ this.closeModals }>
          <SimpleCard cardData={this.state.cardData} />
        </SimpleModal>
        <Table className='dataTable' celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Commit</Table.HeaderCell>
              <Table.HeaderCell>Comment</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>User</Table.HeaderCell>
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
