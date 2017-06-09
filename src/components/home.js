import React, { Component } from 'react'
import { GithubCommits } from './githubcommits'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { routes } from '../appConfig/routes'

export class HomeIsTheSix extends Component {
  render() {
    return (
      <div>
        <h3>Welcome To dinesafe6</h3>
        <p>
          This is a work in progress. Thanks for checking it out<br />
          All venues are in Toronto for now<br />
          <br />
          Geolocation currently touch and go on chrome for android. Firefox for android is more reliable.
          <br />
          Main functionality is in the <Link to={routes.MAP}><Button primary content='Map view' icon='map' /></Link><br />
          You can check out the last 25 commits in the table below
        </p>

        <GithubCommits />
      </div>
    )
  }
}
