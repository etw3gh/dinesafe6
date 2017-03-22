
import React, { Component } from 'react'
import { Timeline } from 'react-twitter-widgets'

export class TwitterTL extends Component {
  render() {
    return (
      <Timeline
        dataSource={{sourceType: 'profile', screenName: 'mydinesafe' }}
        options={{chrome: 'noscrollbar nofooter', username: 'Dinesafe', height: twitterHeight, width: '85%' }}
        onLoad={() => {} } />
    )
  }
}
