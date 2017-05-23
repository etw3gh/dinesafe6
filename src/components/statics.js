import React, { Component } from 'react'

export class StaticHome extends Component {
  render() {
    return (
      <div>
        <h2>Welcome</h2>
        <p>
          Click the Fork and Knife at the bottom of the page to begin
        </p>
        <br />
        <input type='text' />
      </div>
    )
  }
}
export class StaticHelp extends Component {
  render() {
    return (
      <div>
        <h2>Help</h2>
        <p>
          Help: Click the Fork and Knife at the bottom of the page to begin...
        </p>

      </div>
    )
  }
}
