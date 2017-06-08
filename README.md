# Dinesafe6

ReactJS front end for Dinesafe inspections in the Six (Toronto)

### React Starter Credit

Based on this [starter](https://github.com/react-webpack-generators/react-webpack-template)


## Demo

[openciti.ca](https://openciti.ca)

## App Layout

Route | Description | Completion | TODO
--- | --- | --- | ---
/ | Intro blurb & recent github commits table | 95% | This is a temp view. Will become the search view.
/map | Map and listing of local venues with link to inspections | 90% | geoloc on mobile browsers not always working
/inspections | Table of inspections for a given venue | 80% | add map / directions
/pho | List of nearby Pho soup houses | 30% | model after map view
/search | Search venues by various terms | 0 | --
/opendata | City of Toronto Open Data Licence | DONE | Merge with Licence / Source / GithubCommits
/licence | GPL v3.0 GNU General Public Licence | DONE | Merge with Licence / Source / GithubCommits
/source | GitHub links | DONE | Merge with Licence / Source / GithubCommits
/twitterbot | Twitter feed for interactive twitter bot | DONE | AWS Lambda Bot
/twitterhelp | Desc of twitterbot | DONE | Merge with twitterbot view
/help | How to use the site | 0 | ---

## Project Structure

<!-- language: lang-none -->

    src
    ├── appConfig
    │   ├── actions.js            - Enum for reducer actions
    │   ├── controls.js           - Config for sliders
    │   ├── initstate.js          - Initial state for the reducer store
    │   ├── inspectionconfg.js    - Config for inspection labels
    │   ├── menu.js               - Menu config and ordering
    │   ├── routes.js             - Enum for routes
    │   ├── urls.js               - Class encapsulating API URLs and methods to form them
    ├── classes
    │   ├── geo.js                - Geolocation helper
    │   ├── pop.js                - Encapsulates toastr.js in a Poptart metaphor
    │   ├── protocol.js           - Forces HTTPS unless localhost
    │   ├── reducer.js            - Redux reducer
    │   └── strings.js            - String manipulation helpers
    ├── components
    │   ├── card.js               - Experimentation with semantic-ui Card
    │   ├── githubcommits.js      - Calls the github API puts last 25 commits in a Table
    │   ├── home.js               - Into blurb and github commits... TEMPORARY
    │   ├── infocard.js           - Experimentation with semantic-ui Card
    │   ├── inspections.js        - Dinesafe Inspections for a given Venue
    │   ├── ioi.js                - Returns an Icon or an Image depending on props
    │   ├── loa.js                - Returns a Link or Action Trigger depending on props
    │   ├── main.js               - Main React App
    │   ├── map.js                - Map and Table of nearby venues
    │   ├── pho.js                - TODO model after map.js
    │   ├── README.md             - Thank You!
    │   ├── renderMenus.js        - Toolbar and Sidebar Menus
    │   ├── routeComponents.js    - Helper functions for Router
    │   ├── simplemodal.js        - Simple modal grabbed from CodePen (The Semantic Modal was too heavy)
    │   ├── sourcecode.js         - InfoCard with github details
    │   ├── statics.js            - Static views
    │   ├── statuslabel.js        - Wrapper for semantic-ui Label
    │   └── twitter.js            - Twitter Time Line view for twitter bot
    ├── config                    - Webpack stuff
    │   ├── base.js
    │   ├── dev.js
    │   ├── dist.js
    │   ├── README.md
    │   └── test.js
    ├── favicon.ico               - Fork and Knife favicon
    ├── images                    - content
    ├── index.html                - INDEX HTML
    ├── index.js                  - REACT ENTRY POINT
    └── styles                    - CSS

-----

## Screenshots

### Venue Map

![screenshot](https://raw.githubusercontent.com/openciti/dinesafe6/master/src/images/screenshots/map.png)


### Inspections

#### Vesuvio's Pizza
![vesuvios](https://raw.githubusercontent.com/openciti/dinesafe6/master/src/images/screenshots/vesuvio.png)


#### Random Sample
![sample](https://raw.githubusercontent.com/openciti/dinesafe6/master/src/images/screenshots/sample.png)

-----

## Ruby on Rails Backend

[github repo for rails app](https://github.com/openciti/dinesafeheroku) [Deployed to Heroku]


## copyright

&copy; Eli Tabello 2017

## GNU General Public License

[GPL v3](https://www.gnu.org/licenses/gpl-3.0.txt)
