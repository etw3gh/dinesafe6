import React, { Component } from 'react'
import { GithubCommits } from './githubcommits'
import { Button, Icon, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { routes } from '../appConfig/routes'

export class HomeIsTheSix extends Component {
  render() {
    return (
      <div>
        <h3></h3>
        <Message color='blue' header='Welcome To dinesafe6'
                 list={['This is a work in progress','All venues are in Toronto for now']}>
          <Message.Content>
            <Link to={routes.MAP}><Button primary content='Map view' icon='map' /></Link>
          </Message.Content>
        </Message>
        <br />
        <Message error header='Issues'
                 list={[
                   'Geolocation on chrome for android not consistently working',
                   'Server: may need to renew letsencrypt certificate for google maps api...',
                   'Firefox for android is more reliable',
                   'Modals not mobile friendly',
                   'Backend: assumption that row_id would remain the same across xml releases was incorrect resulting in duplicate rows'
                 ]} />
        <br />
        <h3>You can check out the last 25 commits in the table below</h3>
        <GithubCommits />
      </div>
    )
  }
}
