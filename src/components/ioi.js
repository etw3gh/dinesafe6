import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

export class IconOrImage extends Component {
  render () {
    const P = this.props
    const nosize = this.props.size == null || this.props.size === undefined
    const size = nosize ? 'medium' : P.size
    const icon_or_image = P.icon === null ? <span><img className='imgIcon' src={P.img} />&nbsp;</span> : <Icon color={P.col} size={P.size} name={P.icon} />
    return icon_or_image
  }
}
