import { View } from 'react-sketchapp'
import React from 'react'
import types from './types'
import TypographyItem from './typography-item'
import Category from '../UI/Category/index'

const Typography = ({ themeID = 'light'}) => {
    return (
        <Category themeID={themeID} category={'Typography'}>
            <View>
                ${types.map((type, index) => <TypographyItem key={index} type={type} themeID={themeID}/> )}
            </View>
        </Category>
    )
}

export default Typography