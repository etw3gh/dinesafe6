import React, { Component } from 'react'
import { GithubCommits } from './githubcommits'

export class HomeIsTheSix extends Component {
  render() {
    return (
      <div>
        <h3>Welcome To dinesafe6</h3>
        <p>
          This is a work in progress. Thanks for checking it out<br />
          All venues are in Toronto for now<br />
          Main functionality is in the Map option (see sidebar)<br />
          You can check out the last 25 commits in the table below
        </p>

        <GithubCommits />
      </div>
    )
  }
}
