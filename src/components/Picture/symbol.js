import React from 'react'
import { Image } from 'react-sketchapp'
import { generateSymbol } from '../../util'

const stylesPicture = {
    width: 80,
    height: 80,
    resizeMode: 'contain'
}

export const symbol = (images, themeID) => {
    images.map(image => {
        generateSymbol(() => <Image
            source={image.source}
            style={{width: 60, height: 50 }}
            resizingConstraint={{ top: true, right: true, bottom: true, left: true, fixedHeight: false, fixedWidth: false }}
        />, ['Image', image.name], themeID)
    })
}