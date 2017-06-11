// default limit for ajax calls
// sliders will max out to this
export const LIMIT = 500

const sliderMin = 1

const hmax = window.innerHeight * 0.85

export const sliders = {
  styles: {
    hr: { width: '25%' },
    sliderW: { width: '70%' }
  },
  venues: {
    val: LIMIT / 5,
    min: sliderMin,
    max: LIMIT
  },
  map: {
    height: {
      val: hmax * 0.7,
      min: 200,
      max: hmax
    },
    zoom: {
      val: 15,
      min: 8,
      max: 22
    }
  }
}
