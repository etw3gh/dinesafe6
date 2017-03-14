export class Urls  {

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
}
