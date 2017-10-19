import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import CopyToClipboard from 'react-copy-to-clipboard';

export default class Clip extends Component {
  render() {
    return (
      <CopyToClipboard text={this.props.text}>
        <Icon name='copy' title='copy to clipboard' color='blue' size='large' />
      </CopyToClipboard>
    )
  }
}
