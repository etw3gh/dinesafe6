import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { actions } from '../appConfig/actions'
import { Geo } from '../classes/geo'
import { IconOrImage } from './ioi'
/*
Returns Wraps an icon and optional extra span in a Link tag if there is a route,
or returns an icon with an onClick method depending on props sent (see menus.js)
*/
export class LinkOrAction extends Component {

  /*
  <Link to={item.route}>
    <IconOrImage icon={item.icon} img={item.img} />
  </Link>
  */
  doAction = (action) => {
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

  render () {
    const P = this.props
    const I = P.item
    const noRoute = I.route === null
    const spanClass = P.spanClass === null || P.spanClass === ''
    const onClick = I.action !== null

    const extraSpan = !P.hasExtra ? '' : <span className='alignMenuItems'>{I.label}</span>

    let imageSpan = ''
    if (onClick) {
      imageSpan = <span onClick={ () => {this.doAction(I.action)} }><IconOrImage icon={I.icon} img={I.img} />{extraSpan}</span>
    }
    else {
      imageSpan = <span><IconOrImage icon={I.icon} img={I.img} />{extraSpan}</span>
    }

    const link_or_action = noRoute ? imageSpan : <Link className='navStyle' to={I.route}>{imageSpan}</Link>

    return link_or_action
  }
}
