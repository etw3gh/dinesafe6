import React, { Component } from 'react'

/*
  dynamically serves yelp star images

  run ./yelp.sh

    - downloads yelp images
    - extracts zip
    - creates path in images folder yelp_stars
    - extracts only the small directory (modify to suit)
    - deletes zip and unzipped archive (comment out to suit)
*/

export class YelpStars extends Component {
  /*
  size: small [optionally: regular, large, extra_large]
  stars: 0, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5
  scale: 1, 2, 3
  */
  imagePath = (stars, scale=1, size='small') => {
    if (stars < 0 || stars > 5) {
      throw ('stars must be between 0 and 5')
    }
    let scaleMod = ''
    if (scale == 2) {
      scaleMod = '@2x'
    }
    else if (scale == 3) {
      scaleMod = '@3x'
    }
    else {
      scaleMod = ''
    }

    const half = stars % 1 == 0.5 ? true : false
    const halfMod = half ? '_half' : ''
    const rating = Math.floor(stars)

    // construct filename according to params
    return `images/yelp_stars/${size}/${size}_${rating}${halfMod}${scaleMod}.png`
  }

  render() {
    const path = this.imagePath(this.props.stars) // add scale and size if req'd
    return (
       <img src={path} />
    )
  }
}
