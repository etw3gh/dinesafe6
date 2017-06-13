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
                   'Download or email inspection data for a venue (csv/pdf)',
                   'Make map markers interactive',
                   'Allow mobile users to turn on/off map',
                   'Allow user to drop home marker if geoloc fails or is inaccurate',
                   'User assisted yelp search. stash images and yelp_id in mongo',
                   'User assisted twitter search. stash avatar images, handle and twitter_id in mongo',
                   'Wire up mongodb to allow user image upload, and admin features',
                   'Sortable & filterable columns',
                   'Search View',
                   'Status / Severity legend',
                   'Show nearby venues when in the inspection view of a venue' ]} />
        <br />
        <Message error header='Issues'
                 list={[
                   'separate venue types in reducer: pho/regular/beer/coffee/other....',
                   'isolate map from menu swipe events (mobile)',
                   'nav css. icon colors for image icons',
                   'Geolocation on chrome for android not consistently working' ]} />
        <br />
        <h3>You can check out the last 25 commits in the table below</h3>
        <h4>
          <a href={Urls.github.issues} target='_blank'>
            <Button color='red' icon='exclamation circle' label={{basic:true, color: 'red', pointing: 'left', content: 'Raise An Issue'}} />
          </a>
        </h4>
        <h4>
          <a href={Urls.github.pulls} target='_blank'>
            <Button color='green' icon='graduation' label={{basic:true, color: 'green', pointing: 'left', content: 'Pull Request'}} />
          </a>
        </h4>
        <br />
        <GithubCommits />
      </div>
    )
  }
}
