import React, { Component } from 'react'
import { List, ListItem, Toolbar } from 'react-onsenui'
import { hamburgerMenu } from '../appConfig/menu'
import { Icon } from 'semantic-ui-react'
import { LinkOrAction } from './loa'
import { store } from './main'

export class RenderToolBar extends Component {
  handleClick = () => {
    this.props.ShowMenuClick()
  }

  render() {
    const geoLoaded = store.getState().geoLoaded
    const menuIcon = geoLoaded ? 'hamburger' : 'spinner'

    return(
      <Toolbar>
        <div className='left'>
          <Icon onClick={this.handleClick} size='large' className={menuIcon} name='sidebar'/>
        </div>
        <div className='center'>Dinesafe 6</div>
      </Toolbar>
    )
  }
}

export class RenderHamburger extends Component {
  handleClick = () => {
    console.log('hide click')
    this.props.HideMenuClick()
  }
  render() {
    const hm = hamburgerMenu.items.map( (item) => {
      return (
        <ListItem key={item.label} tappable>
           <LinkOrAction HideMenuClick={this.handleClick} item={item} />
        </ListItem>
      )
    })
    return <List>{hm}</List>
  }
}
