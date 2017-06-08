# Dinesafe6

ReactJS front end for Dinesafe inspections in the Six (Toronto)

## Demo

[openciti.ca](https://openciti.ca)

## App Layout

route | description | dev status | TODO
--- | ---
/ | Intro blurb & recent github commits table | temporary | --
/map | Map and listing of local venues with link to inspections | geoloc on mobile browsers not always working
/inspections | Table of inspections for a given venue | add map / directions
/pho | List of nearby Pho soup houses | Temp View... | model after map view
/search | Search venues by various terms | TODO | --
/opendata | City of Toronto Open Data Licence | DONE | Merge with Licence / Source / GithubCommits
/licence | GPL v3.0 GNU General Public Licence | DONE | Merge with Licence / Source / GithubCommits
/source | GitHub links | DONE | Merge with Licence / Source / GithubCommits
/twitterbot | Twitter feed for interactive twitter bot | DONE | AWS Lambda Bot
/twitterhelp | Desc of twitterbot | DONE | Merge with twitterbot view
/help | How to use the site | TODO | ---

## Project Structure --TODO ADD DESC BESIDE EACH FILE--

<!-- language: lang-none -->

    src
    ├── appConfig
    │   ├── actions.js
    │   ├── controls.js
    │   ├── initstate.js
    │   ├── inspectionconfg.js
    │   ├── menu.js
    │   ├── README.md
    │   ├── routes.js
    │   ├── urls.js
    │   └── views.js
    ├── classes
    │   ├── geo.js
    │   ├── pop.js
    │   ├── protocol.js
    │   ├── reducer.js
    │   └── strings.js
    ├── components
    │   ├── card.js
    │   ├── githubcommits.js
    │   ├── home.js
    │   ├── infocard.js
    │   ├── inspections.js
    │   ├── ioi.js
    │   ├── loa.js
    │   ├── main.js
    │   ├── map.js
    │   ├── pho.js
    │   ├── README.md
    │   ├── renderMenus.js
    │   ├── routeComponents.js
    │   ├── simplemodal.js
    │   ├── sourcecode.js
    │   ├── statics.js
    │   ├── statuslabel.js
    │   └── twitter.js
    ├── config
    │   ├── base.js
    │   ├── dev.js
    │   ├── dist.js
    │   ├── README.md
    │   └── test.js
    ├── favicon.ico
    ├── images
    │   ├── citylogo.svg
    │   ├── cn.png
    │   ├── gnu_black_30x26.png
    │   ├── gplv3-127x51.png
    │   ├── home-512.png
    │   ├── pho
    │   │   ├── 10211713.png
    │   │   ├── 9393597.png
    │   │   └── 9413238.png
    │   ├── phoicon.png
    │   ├── phoicon_white_34x34.png
    │   ├── pho.png
    │   ├── screenshots
    │   │   ├── map.png
    │   │   ├── sample.png
    │   │   ├── screenshot_00.png
    │   │   └── vesuvio.png
    │   ├── skyline.jpg
    │   ├── to.png
    │   └── yeoman.png
    ├── index.html
    ├── index.js
    └── styles
        ├── App.css
        ├── modal.css
        └── pagecontent.css

## Screenshots

### Venue Map

![screenshot](https://raw.githubusercontent.com/openciti/dinesafe6/master/src/images/screenshots/map.png)


### Inspections

![vesuvios](https://raw.githubusercontent.com/openciti/dinesafe6/master/src/images/screenshots/.vesuvio.png)

![sample](https://raw.githubusercontent.com/openciti/dinesafe6/master/src/images/screenshots/sample.png)


### PhoNet

![screenshot](https://raw.githubusercontent.com/openciti/dinesafe6/master/src/images/screenshots/screenshot_00.png)

## Backend

[rails](https://github.com/openciti/dinesafeheroku) Backend

### Backend Helper

[Python](https://github.com/openciti/dinesafemicroservices) Linux and web services that keeps unzipped copies of the dinesafe & geographic archives available for the heroku backend. See backend README for more details.

## copyright

&copy; Eli Tabello 2017

## GNU General Public License

[GPL v3](https://www.gnu.org/licenses/gpl-3.0.txt)
