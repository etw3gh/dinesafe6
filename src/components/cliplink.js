import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import CopyToClipboard from 'react-copy-to-clipboard';
import { Pop } from '../classes/pop'

export default class ClipLink extends Component {
  handleClick = () => {
    if (this.props.pop) {
      Pop.INFO('Link Copied')
    }
  }
  render() {
    return (
      <CopyToClipboard
        text={this.props.text}>
        <Icon.Group
          onClick={this.handleClick}
          size='large'
          title='copy to clipboard'>
            <Icon
              name='copy'
              size='large'
              color='blue' />
            <Icon
              name='linkify'
              size='large'
              color='green'
              corner />
        </Icon.Group>
      </CopyToClipboard>
    )
