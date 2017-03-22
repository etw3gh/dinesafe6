import React, { Component } from 'react'
import { Card, Icon } from 'semantic-ui-react'
import { IconOrImage } from './ioi'

export class InfoCard extends Component {
  render() {

    const P = this.props;
    const picon = P.icon === '' ? null : P.icon
    const icon_or_image = <IconOrImage img={P.iconimg} icon={picon} />

    const bottomIcon = <a href={P.link}>{icon_or_image}{P.icontxt}</a>

    return (
      <Card image={P.img}
            header={P.header}
            meta={P.meta}
            description={P.desc}
            extra={bottomIcon} />
    )
  }
}
