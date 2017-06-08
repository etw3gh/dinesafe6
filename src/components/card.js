import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export class SimpleCard extends Component {
  render() {
    const P = this.props.cardData

    const i = (window.innerHeight < 525) ? '' : <Image src={P.img} />
    
    return (
      <Card>
        {i}
        <Card.Content>
          <Card.Header>
            {P.header}
          </Card.Header>
          <Card.Meta>
            <a href={P.link} target="_blank">
              <span className='date'>
                <Icon name='chain' /> {P.linkText}
              </span>
            </a>
          </Card.Meta>
          <Card.Description>
            {P.desc}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name={P.extraIcon} /> {P.extraText}
        </Card.Content>
      </Card>
    )
  }
}
