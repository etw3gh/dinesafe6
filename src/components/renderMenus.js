import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Fab, List, ListItem, SpeedDial, SpeedDialItem, Toolbar } from 'react-onsenui'
import { hamburgerMenu, speedDialMenu } from '../appConfig/menu'
import { Icon } from 'semantic-ui-react'
import { IconOrImage } from './ioi'
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

export class RenderSpeedDial extends Component {
  render() {
    const dialItems = speedDialMenu.items.map( (item, index) => {
    const sdstyle = 'color: red'
      return (
        <SpeedDialItem style={{sdstyle}} key={'speed_dial_' + index}>
          <Link to={item.route}>
            <IconOrImage icon={item.icon} img={item.img} />
          </Link>
        </SpeedDialItem>
      )
    })
    return(
      <SpeedDial position='bottom right' direction='up' >
        <Fab>
          <Icon size='large' name='food' />
        </Fab>
        {dialItems}
      </SpeedDial>
    )
  }
}

export class RenderHamburger extends Component {
  render() {
    const hm = hamburgerMenu.items.map( (item) => {
      return (
        <ListItem key={item.label} tappable>
          <LinkOrAction item={item} hasExtra={true} />
        </ListItem>
      )
    })
    return <List>{hm}</List>
  }
}
