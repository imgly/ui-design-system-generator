// Modules
import React from 'react'
import { Artboard, View} from 'react-sketchapp'

import { default as uiColor } from '../../../theme/ui/color'
import { color as appColor } from '../../../theme/app/color'
import { images as appImages } from '../../../theme/app/image'

// Components
import Color from '../../Color'
import Shadow from '../../Shadow'
import Picture from '../../Picture'
// import Typography from '../../Typography'

const WrapperStyles = (backgroundColor) => {
    return {
        backgroundColor,
        paddingBottom: 120,
        paddingLeft: 120,
        paddingRight: 120,
        paddingTop: 120
    }
}

// Render
const UITheme = ({ themeID = 'light', index }) => {
    return (
        <Artboard name={themeID} style={{position:'absolute', x: 0, marginLeft: `${index * 1200}px`}}>
            <View name={'theme_' + themeID} style={WrapperStyles(uiColor.background.standard[themeID])}>
                <Color colorGroups={appColor} themeID={themeID}/>
                <Shadow themeID={themeID} />
                <Picture images={appImages} themeID={themeID}/>
            </View>
        </Artboard>
    )
}

export default UITheme
