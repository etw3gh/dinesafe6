// default limit for ajax calls
// sliders will max out to this
export const LIMIT = 500

const sliderMin = 1

export const sliders = {
  styles: {
    hr: { width: '25%' },
    sliderW: { width: '70%' }
  },
  venues: {
    val: 20,
    min: sliderMin,
    max: LIMIT
  },
  map: {
    height: {
      val: 300,
      min: 200,
      max: window.innerHeight / 2
    },
    zoom: {
      val: 15,
      min: 8,
      max: 22
    }
  }
}
