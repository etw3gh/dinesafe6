require('../styles/pagecontent.css')

import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import { IconOrImage } from './ioi'

export class InfoCard extends Component {
  render() {

    const P = this.props;
    const picon = P.icon === '' ? null : P.icon
    const icon_or_image = <IconOrImage img={P.iconimg} icon={picon} />

    const bottom =  <a target='_blank' href={P.link}>{icon_or_image}{P.icontxt}</a>

    return (
      <div className='listStyle'>
          <Card image={P.img}
                header={P.header}
                meta={P.meta}
                description={P.desc}
                extra={bottom} />
      </div>
    )
  }
}
