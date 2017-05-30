import React, { Component } from 'react'
import { List, ListItem, Toolbar } from 'react-onsenui'
import { hamburgerMenu } from '../appConfig/menu'
import { Icon } from 'semantic-ui-react'
import { LinkOrAction } from './loa'


export class RenderToolBar extends Component {
  handleClick = () => {
    this.props.ShowMenuClick()
  }
  render() {
    return(
      <Toolbar>
        <div className='left'>
          <Icon onClick={this.handleClick} size='large' className='hamburger' name='sidebar'/>
        </div>
        <div className='center'>Dinesafe 6</div>
      </Toolbar>
    )
  }
}

export class RenderHamburger extends Component {

  render() {
    const hm = hamburgerMenu.items.map( (item) => {
      return (
        <ListItem key={item.label} tappable>
           <LinkOrAction item={item} />
        </ListItem>
      )
    })
    return <List>{hm}</List>
  }
}
