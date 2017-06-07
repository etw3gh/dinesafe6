import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { actions } from '../appConfig/actions'
import { Geo } from '../classes/geo'
import { IconOrImage } from './ioi'
/*
Returns an icon and optional extra span in a Link tag if there is a route,
or returns an icon with an onClick method depending on props sent (see menus.js)
*/
export class LinkOrAction extends Component {

  doAction = (action) => {
    console.log('action triggered: ' + action)
    if (action === actions.SHOWGEO) {
      Geo.showGeo()
    }
    else if (action === actions.REGEO) {
      Geo.refreshGeo()
    }
    else {
      console.log('${action} is not a recognized action')
    }
  }
  handleClick = () => {
    console.log('click')
    this.props.HideMenuClick()
  }
  render () {
    const P = this.props
    const I = P.item

    const extraSpan = <span className='alignMenuItems'>{I.label}</span>
    if (I.action === actions.CLOSEMENU) {
      return <span onClick={this.handleClick}><IconOrImage className='insideHamburger' size='large' icon={I.icon} img={I.img} />{extraSpan}</span>
    }
    else if (I.action !== null) {
      return <span onClick={  () => {this.doAction(I.action)} }><IconOrImage icon={I.icon} img={I.img} />{extraSpan}</span>
    }
    else {
      return <Link to={I.route}><IconOrImage icon={I.icon} img={I.img} col={I.col} />{extraSpan}</Link>
    }
  }
}
