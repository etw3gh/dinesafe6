import React, { Component } from 'react'
import { Timeline } from 'react-twitter-widgets'

export default class TwitterTL extends Component {
  render() {
    const timelineHeight = window.innerHeight * 0.85
    return (
      <Timeline
        dataSource={{sourceType: 'profile', screenName: 'mydinesafe' }}
        options={{chrome: 'noscrollbar nofooter', username: 'Dinesafe', height: timelineHeight, width: '85%' }} />
    )
  }
}
