import React, { Component } from 'react'
import { Icon, Label } from 'semantic-ui-react'

export default class StatusLabel extends Component {
  render() {
    const P = this.props
    const C = P.config
    return (
      <Label style={{width: '105px'}} color={C.color}>
        <Icon name={C.icon} />
        {P.text}
      </Label>
    )
  }
}
