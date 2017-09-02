import React from 'react'
import { StaticHelp } from './statics'
import { HomeIsTheSix } from './home'
import { SourceCode } from './sourcecode'
import { InfoCard } from './infocard'
import { TwitterTL } from './twitter'
import { MapWrap } from './map'
import { Inspections } from './inspections'

export class rts {
  static Home = () => <MapWrap isPho={false}/>
  static VenueList = () => <div>coming soon...</div>
  static VenueMap = () => <MapWrap isPho={false}/>
  static VenueSearch = () => <div>venue search</div>
  static Help = () => <HomeIsTheSix />
  static Pho = () => <MapWrap isPho={true}/>
  static Source = () => <SourceCode />
  static TwitterBot = () => <TwitterTL />
  static DinesafeInspections = () => <Inspections />

  static Licence = () => (<InfoCard link='https://www.gnu.org/licenses/gpl-3.0.en.html'
                           icon=''
                           icontxt='gnu.org'
                           iconimg='../images/gnu_black_30x26.png'
                           img='../images/gplv3-127x51.png'
                           meta='Version 3, 29 June 2007'
                           header='GNU GENERAL PUBLIC LICENSE'
                           desc='Copyright 2017 Eli Tabello' />)

  static OpenData = () => (<InfoCard link='http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=4a37e03bb8d1e310VgnVCM10000071d60f89RCRD'
                            icon='creative commons'
                            icontxt='toronto.ca'
                            iconimg=''
                            img='../images/to.png'
                            meta='Toronto'
                            header='Open Government Licence'
                            desc='Version 1.0' />)

  static TwitterHelp = () => (<InfoCard link='https://twitter.com/mydinesafe'
                               icon='twitter'
                               icontxt='@mydinesafe'
                               img=''
                               meta='In development'
                               desc='You will soon be able to query the dinesafe inspection database via this interactive twitterbot....'
                               header='Twitter Bot' />)
}
