require('semantic-ui/dist/semantic.min.css')

import React, { Component } from 'react'
import GithubCommits from './githubcommits'
import { Button, Icon, Label, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { routes } from '../appConfig/routes'
import { Urls } from '../appConfig/urls'

export default class HomeIsTheSix extends Component {
  render() {
    const btnStyle = {
      basic:true,
      color: 'red',
      pointing: 'left',
      content: 'Raise An Issue' }
    return (
      <div>
        <Message color='blue'>
          <Message.Content>
            <Label color='blue'>
              <Link
                style={{fontSize: '20px'}}
                to={routes.MAP}>
                <Icon
                  size='huge'
                  name='chain' />
                Main View
              </Link>
             </Label>
          </Message.Content>
        </Message>
        <br />
        <h3>You can check out the last 25 commits in the table below</h3>
        <h4>
          <a href={Urls.github.issues} target='_blank'>
            <Button
              color='red'
              icon='exclamation circle'
              label={btnStyle} />
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
