import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import CopyToClipboard from 'react-copy-to-clipboard';


// wrapper for CopyToClipboard component
export class Clip extends Component {
  render() {
    return (
      <CopyToClipboard text={this.props.text}>
        <Icon name='copy' title='copy to clipboard' color='blue' size='large' />
      </CopyToClipboard>
    )
  }
}
export class ClipLink extends Component {
  render() {
    return (
      <CopyToClipboard text={this.props.text}>
        <Icon.Group size='large' title='copy to clipboard'>
        <Icon name='linkify' color='blue' />
        <Icon name='copy' corner color='blue' />
        </Icon.Group>
      </CopyToClipboard>
    )
  }
}
