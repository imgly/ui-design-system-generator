// Modules
import React from 'react'
import { View } from 'react-sketchapp'

import UITypo from '../Typo/index'

const WrapperStyles = {
    paddingTop: 80
}

// Render
const Category = ({ category, children, themeID }) => (
    <View name={category.toLowerCase()} styles={WrapperStyles}>
        <UITypo type='h2' themeID={themeID} name={'Title'}>{category}</UITypo>
        <View name='content'>
            {children}
        </View>
    </View>
)

export default Category
