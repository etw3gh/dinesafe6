/*
Static class that encapsulates web service urls
as well as methods to form them
*/
export class Urls  {

  static base = 'https://openciti.ca/dsto/';

  static api = 'https://dinesafe.herokuapp.com';
  static addresses = `#{api}/addresses/`;
  static inspections = `#{api}/inspections/`;
  static venues = `#{api}/venues/`;

  static maps = {
    static: 'https://maps.googleapis.com/maps/api/staticmap?zoom=19&size=600x600&maptype=roadmap&markers=color:blue%7C'
  }
  static heroku = {
      municipalities: `#{addresses}/mun`,
      addresses: {
        munstreets: `#{addresses}munstreets`,
        mun: `#{addresses}mun`,
        streets: `#{addresses}streets`,
        numbers: `#{addresses}numbers`
      },
      venues: {
        nearby: `#{venues}nearby`,
        get: `#{venues}get`,
        pho: `#{venues}pho`
      },
      inspections: {
        find: `#{inspections}find`,
        near: `#{inspections}near`,
        nearsearch: `#{inspections}nearsearch`,
        byaddress: `#{inspections}byaddress`,
        get: `#{inspections}get`,
        statuses: `#{inspections}status`,
        byaddr: `#{inspections}byaddr`
      }
  }
  static phoUrlGen = (lat, lng, limit) => {
    const url = `${Urls.heroku.venues.pho}/${lat}/${lng}/${limit}`;
    return url;
  }
}
