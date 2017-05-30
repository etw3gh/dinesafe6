/*
Static class that encapsulates web service urls
as well as methods to form them
*/
export class Urls  {

  static base = 'https://openciti.ca/dsto/'

  static api = 'https://dinesafe.herokuapp.com'

  static addresses = `${Urls.api}/addresses/`
  static inspections = `${Urls.api}/inspections/`
  static venues = `${Urls.api}/venues/`

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
        get: `${Urls.venues}get`,
        pho: `${Urls.venues}pho`
      },
      inspections: {
        find: `${Urls.inspections}find`,
        near: `${Urls.inspections}near`,
        nearsearch: `${Urls.inspections}nearsearch`,
        byaddress: `${Urls.inspections}byaddress`,
        get: `${Urls.inspections}get`,
        statuses: `${Urls.inspections}status`,
        byaddr: `${Urls.inspections}byaddr`
      }
  }
  static phoUrlGen = (lat, lng, limit) => {
    return `${Urls.heroku.venues.pho}/${lat}/${lng}/${limit}`;
  }
}
