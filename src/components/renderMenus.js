import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Fab, ListItem, SpeedDial, SpeedDialItem, Toolbar } from 'react-onsenui'
import { LinkOrAction } from './loa'
import { hamburgerMenu, speedDialMenu } from '../appConfig/menu'
import { Icon } from 'semantic-ui-react'

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

export class RenderMenus {

  static speedDial = () => {
    const dialItems = speedDialMenu.items.map( (item, index) => {

    return (
      <SpeedDialItem isOpen={false} key={'speed_dial_' + index}>
        <LinkOrAction item={item} hasExtra={false} spanClass='' />
      </SpeedDialItem>
    )

    })
    let openDirection =  'up'

    return(
      <SpeedDial position='bottom right' direction={openDirection} >
        <Fab>
          <Icon size='large' name='food' />
        </Fab>
        {dialItems}
      </SpeedDial>
    )
  }
  static items = () => {

    return hamburgerMenu.items.map( (item) => {
      return (
        <ListItem key={item.label} tappable>
           <LinkOrAction item={item} hasExtra={true} spanClass='alignMenuItems' />
        </ListItem>
      )
    })
  }

}
