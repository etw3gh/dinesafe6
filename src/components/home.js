require('semantic-ui/dist/semantic.min.css')

import React, { Component } from 'react'
import { GithubCommits } from './githubcommits'
import { Button, Icon, Label, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { routes } from '../appConfig/routes'
import { Urls } from '../appConfig/urls'

export class HomeIsTheSix extends Component {
  render() {
    return (
      <div>
        <h3></h3>
        <Message color='blue'>
          <Message.Content>
            <Label color='blue'>
              <Icon size='huge' name='chain'/>
                <Link style={{fontSize: '20px'}} to={routes.MAP}>Map </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link style={{fontSize: '20px'}} to={routes.PHO}>Pho </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             </Label>
          </Message.Content>
        </Message>
        <br />
        <Message color='green' header='TODOs'
                 list={[
                   'Make map markers interactive',
                   'Allow user to drop home marker if geoloc fails or is inaccurate',
                   'If not in mongodb, grab yelp info for venue & stash in mongodb',
                   'Wire up mongodb to allow user image upload, and admin features',
                   'Sortable columns',
                   'Filterable columns',
                   'Search View',
                   'Show nearby venues when inspection view for a venue' ]} />
        <br />
        <Message error header='Issues'
                 list={[
                   'nav css. icon colors for image icons',
                   'Geolocation on chrome for android not consistently working' ]} />
        <br />
        <h3>You can check out the last 25 commits in the table below</h3>
        <h4>
          <a href={Urls.github.issues} target='_blank'>
            <Button color='red' icon='exclamation circle' size='large' label={{basic:true, color: 'red', pointing: 'left', content: 'Raise An Issue'}} />
          </a>
        </h4>
        <h4>
          <a href={Urls.github.pulls} target='_blank'>
            <Button color='green' icon='graduation' size='large' label={{basic:true, color: 'green', pointing: 'left', content: 'Pull Request'}} />
          </a>
        </h4>
        <GithubCommits />
      </div>
    )
  }
}
