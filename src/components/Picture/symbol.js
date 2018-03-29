import React from 'react'
import { Image, View } from 'react-sketchapp'
import { generateSymbol } from '../../util'

const stylesPicture = {
    width: 80,
    height: 80,
    resizeMode: 'contain'
}

export const symbol = (images, themeID) => {
    images.map(image => {
        generateSymbol(() =>
            <View
                name='image'
                resizingConstraint={{ top: true, right: true, bottom: true, left: true, fixedHeight: false, fixedWidth: false }}>
                <Image
                    source={image.source}
                    style={{width: 40, height: 40 }}/>
            </View>
        , ['Image', image.name], themeID)
    })
}