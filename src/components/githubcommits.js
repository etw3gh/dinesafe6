import React, { Component } from 'react'
import { Pop } from '../classes/pop'
import { niceDate, stripSingles } from '../classes/strings'
import { actions } from '../appConfig/actions'
import { Urls } from '../appConfig/urls'
import { store } from './main'
import { Icon, Image, Table } from 'semantic-ui-react'

let axios = require('axios')

require('semantic-ui/dist/semantic.min.css')
require('../styles/modal.css')

export class GithubCommits extends Component {
  state = {commitModalOpen: false, githubUserModalOpen: false, cardData: {}, readMore: [], allRows: []}
  componentDidMount = () => {
    const url = Urls.github
    let allRows = []
    axios.get(url).then( (res) => {
      store.dispatch( { type: actions.COMMITS, commits: res.data } )
      res.data.forEach( (commit) => {
        allRows.push(commit.sha)
      })
      this.setState( { allRows: allRows } )
    }).catch( e => Pop.ERR(e) )
  }
  toggleReadMore = (sha) => {
    let readMore = this.state.readMore
    if (readMore.includes(sha)) {
      readMore = this.state.readMore.filter( (element) => {
        return element !== sha
      } )
    }
    else {
      readMore.push(sha)
    }
    this.setState( { readMore: readMore } )
  }

  colapseAll = () => {
    this.setState( { readMore: [] } )
  }
  expandAll = () => {
    const allRows = this.state.allRows
    this.setState( { readMore: allRows } )
  }

  renderReadMore = (c) => {

    return (
      <ul style={{listStyleType: 'none'}}>
        <li><Image width='80px' height='80px' src={c.author.avatar_url} /></li>
        <li><a href={`${c.author.html_url}?tab=repositories`} target='_blank'></a>{c.author.login}</li>
        <li>full sha: <a href={c.html_url}>{c.sha}</a></li>
        <li>commit message: {stripSingles(c.commit.message)}</li>
        <li>{niceDate(c.commit.author.date)}</li>
      </ul>
    )
  }

  render() {
    const commits = store.getState().app.commits
    const rows = commits.map( (c) => {

      const readMore = this.state.readMore
      const commitData = readMore.includes(c.sha) ? this.renderReadMore(c) : c.sha.substr(0, 7)
      const chevron = readMore.includes(c.sha) ? 'chevron left' : 'chevron right'

      return (
        <Table.Row key={`commit_sha_${c.sha}`}>
         <Table.Cell onClick={ () => this.toggleReadMore(c.sha) }><Icon name={chevron} />{commitData}</Table.Cell>
          <Table.Cell>{stripSingles(c.commit.message)}</Table.Cell>
          <Table.Cell>{niceDate(c.commit.author.date)}</Table.Cell>
          <Table.Cell><a href={`${c.author.html_url}?tab=repositories`} target='_blank'>{c.author.login}</a></Table.Cell>
        </Table.Row>
      )
    })
    return (
        <div>
        <Table className='dataTable' celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell singleLine>Commit</Table.HeaderCell>
              <Table.HeaderCell>Comment</Table.HeaderCell>
              <Table.HeaderCell singleLine>Date</Table.HeaderCell>
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
