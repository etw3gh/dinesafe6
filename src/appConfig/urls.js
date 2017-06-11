/*
Static class that encapsulates web service urls
as well as methods to form them
*/
export class Urls  {

  static base = 'https://openciti.ca'

  static api = 'https://dinesafe.herokuapp.com'

  static linkToInspections = `${Urls.base}/inspections`

  static addresses = `${Urls.api}/addresses/`
  static inspections = `${Urls.api}/inspections/`
  static venues = `${Urls.api}/venues/`

  static github = {
    commits: 'https://api.github.com/repos/openciti/dinesafe6/commits?per_page=25&page=1',
    issues: 'https://github.com/openciti/dinesafe6/issues',
    pulls: 'https://github.com/openciti/dinesafe6/pulls'
  }

  static maps = {
    static: 'https://maps.googleapis.com/maps/api/staticmap?zoom=19&size=600x600&maptype=roadmap&markers=color:blue%7C'
  }
  static heroku = {
      municipalities: `${Urls.addresses}/mun`,
      addresses: {
        munstreets: `${Urls.addresses}munstreets`,
        mun: `${Urls.addresses}mun`,
        streets: `${Urls.addresses}streets`,
        numbers: `${Urls.addresses}numbers`
      },
      venues: {
        nearby: `${Urls.venues}nearby`,
        near: `${Urls.venues}near`,
        get: `${Urls.venues}get`,
        pho: `${Urls.venues}pho`
      },
      inspections: {
        find: `${Urls.inspections}find`,
        near: `${Urls.inspections}near`,
        nearsearch: `${Urls.inspections}nearsearch`,
        byaddress: `${Urls.inspections}byaddress`,
        get: `${Urls.inspections}get`,   //get 'get/:vid/:status' => :get
        byvid: `${Urls.inspections}get`, //get 'get/:vid' => :byvid
        byvidlatest: `${Urls.inspections}getlatest`, //get 'getlatest/:vid' => :byvidlatest
        statuses: `${Urls.inspections}status`,
        byaddr: `${Urls.inspections}byaddr`
      }
  }
  static inspectionsByVidLatestVersionUrlGen = vid => {
    return `${Urls.heroku.inspections.byvidlatest}/${vid}`
  }
  static inspectionsByVidUrlGen = vid => {
    return `${Urls.heroku.inspections.byvid}/${vid}`
  }

  static phoUrlGen = (lat, lng, limit) => {
    return `${Urls.heroku.venues.pho}/${lat}/${lng}/${limit}`
  }

  static nearUrlGen = (lat, lng, limit) => {
    return `${Urls.heroku.venues.near}/${lat}/${lng}/${limit}`
  }

  static nearbyUrlGen = (lat, lng, limit, search) => {
    return `${Urls.heroku.venues.nearby}/${lat}/${lng}/${limit}/${search}`
  }

}
