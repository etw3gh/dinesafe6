import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

export class IconOrImage extends Component {
  render () {
    const P = this.props;
    const icon_or_image = P.icon === null ? <span><img className='imgIcon' src={P.img} />&nbsp;</span> : <Icon name={P.icon} />;

    return icon_or_image;
  }
}
