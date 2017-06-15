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
                <Link style={{fontSize: '20px'}} to={routes.MAP}>Main View </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a style={{fontSize: '20px'}} href='https://ds6.ca'>CoreUI Refactor </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             </Label>
          </Message.Content>
        </Message>
        <br />
        <Message color='green' header='INFO'>Being completeley refactored using CoreUI <a href='https://ds6.ca'>(ds6.ca)</a></Message>
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
