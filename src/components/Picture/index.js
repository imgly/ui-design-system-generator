import Category from '../UI/Category'
import { Image, View } from 'react-sketchapp'
import React from 'react'
import { generateSymbol } from '../../util'
import { symbol } from './symbol'

const Picture = ({ images, themeID }) => {
    symbol(images, themeID)
    return (
        <Category category={ 'Images' }>
            <Image
                source={'https://pbs.twimg.com/profile_images/763033229993574400/6frGyDyA_400x400.jpg'}
                style={{width: 60, height: 50 }}
            >

            </Image>
            <View name={ 'contentWrapper' } style={ { marginTop: '24px' } }> </View>
        </Category>
    )
}

export default Picture