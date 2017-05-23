require('semantic-ui/dist/semantic.min.css')
require('onsenui/css/onsenui.css')
require('onsenui/css/onsen-css-components.css')
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Protocol } from '../classes/protocol'
import { List, Page, Splitter, SplitterContent, SplitterSide } from 'react-onsenui'
import { createStore } from 'redux'
import { routes } from '../appConfig/routes'
import { reducer } from '../classes/reducer'
import { Geo } from '../classes/geo'
import { initialState } from '../appConfig/initstate'
import { RenderToolBar, RenderMenus } from './renderMenus'
import { rts } from './routeComponents'

export const store = createStore(reducer, initialState)

class App2 extends Component {

  state = { isOpen: false }

  componentDidMount = () => {
    Protocol.forceProtocol()
    store.subscribe( () => this.forceUpdate() )
    Geo.getLocation(Geo.INIT)
    window.addEventListener('resize', this.closeFab)
  }

  hideMenu = () => {
    this.setState( { isOpen: false } )
  }
  closeFab = () => {
    console.log('TODO: close FAB')
  }
  showMenu = () => {
    this.setState( { isOpen: true } )
  }

  render() {
    const toolbar =  () => {
      return <RenderToolBar ShowMenuClick={this.showMenu} />
    }

    const menuItems = RenderMenus.items()

    const splitterStyle = 'boxShadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'

    return (
      <Router>
        <Splitter>
          <SplitterSide
            style={ {splitterStyle} }
            side='left'
            width={200}
            collapse={true}
            isSwipeable={true}
            isOpen={this.state.isOpen}
            onClose={this.hideMenu}
            onOpen={this.showMenu} >
            <Page>
              <List>{menuItems}</List>
            </Page>
          </SplitterSide>
          <SplitterContent>
            <Page renderToolbar={toolbar} renderFixed={RenderMenus.speedDial}>
              <section style={{textAlign: 'center', margin: '16px'}}>
                <Route exact path={routes.HOME} component={rts.Home} />
                <Route path={routes.INFO} component={rts.About} />
                <Route path={routes.HELP} component={rts.Help} />
                <Route path={routes.PHO} component={rts.Pho} />
                <Route path={routes.OPENDATA} component={rts.OpenData} />
                <Route path={routes.LICENCE} component={rts.Licence} />
                <Route path={routes.SOURCE} component={rts.Source} />
                <Route path={routes.TWITTERBOT} component={rts.TwitterBot} />
                <Route path={routes.TWITTERHELP} component={rts.TwitterHelp} />
                <Route path={routes.MAP} component={rts.Map} />
                <Route path={routes.SEARCH} component={rts.Search} />
                <Route path={routes.LIST} component={rts.List} />
              </section>
            </Page>
          </SplitterContent>
        </Splitter>
      </Router>
    )
  }
}
export default App2
