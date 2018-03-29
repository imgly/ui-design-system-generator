import Category from '../UI/Category'
import { Image, View } from 'react-sketchapp'
import React from 'react'
import { generateSymbol } from '../../util'
import { symbol } from './symbol'

const Picture = ({ images, themeID }) => {
    symbol(images, themeID)
    return (
        <Category category={ 'Images' }>
            <View name={ 'contentWrapper' } style={ { marginTop: '24px' } }> </View>
        </Category>
    )
}

export default Picture