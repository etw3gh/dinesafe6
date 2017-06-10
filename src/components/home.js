require('semantic-ui/dist/semantic.min.css')

import React, { Component } from 'react'
import { GithubCommits } from './githubcommits'
import { Button, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { routes } from '../appConfig/routes'

export class HomeIsTheSix extends Component {
  render() {
    return (
      <div>
        <h3></h3>
        <Message color='blue'>
          <Message.Content>
            <Link to={routes.MAP}><Button primary content='Map view' icon='map' /></Link>
          </Message.Content>
        </Message>
        <br />
        <Message color='green' header='TODOs'
                 list={[
                   'Make map markers ot interactive',
                   'If Geolocation fails, allow user to drop home marker',
                   'Server: may need to renew letsencrypt certificate for google maps api',
                   'Convert Modal views to readmore views as in the inspections table'
                 ]} />
        <br />
        <Message error header='Issues'
                 list={[
                   'Geolocation on chrome for android not consistently working',
                   'Server: may need to renew letsencrypt certificate for google maps api'
                 ]} />
        <br />
        <h3>You can check out the last 25 commits in the table below</h3>
        <GithubCommits />
      </div>
    )
  }
}
