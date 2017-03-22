/*
Static class that encapsulates web service urls
as well as methods to form them
*/
export class Urls  {

  static base = 'https://openciti.ca/dsto/'

  static local = {
    info: 'data/infoitems.json'
  }

  static maps = {
    static: 'https://maps.googleapis.com/maps/api/staticmap?zoom=19&size=600x600&maptype=roadmap&markers=color:blue%7C'
  }
  static heroku = {
      municipalities: 'https://dinesafe.herokuapp.com/mun',
      streets: {
        all: 'https://dinesafe.herokuapp.com/streets',
        mun: 'https://dinesafe.herokuapp.com/streets?mun='
      },
      pho: {
        all: 'https://dinesafe.herokuapp.com/pho',
        near: 'https://dinesafe.herokuapp.com/phoby?'
      }
  }
  static phoUrlGen = (lat, lng, limit) => {
    const url = `${Urls.heroku.pho.near}lat=${lat}&lng=${lng}&limit=${limit}`;
    return url;
  }
}
