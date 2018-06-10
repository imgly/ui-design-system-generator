// Modules
import React from 'react'
import { Artboard, View} from 'react-sketchapp'

import { default as uiColor } from '../../../theme/ui/color'
import { color as appColor } from '../../../theme/app/color'
import { default as appTypography } from '../../../theme/app/typo'
import { images as appImages } from '../../../theme/app/image'

// Components
import Color from '../../Color'
import Shadow from '../../Shadow'
import Picture from '../../Picture'
import Typography from "../../Typography"
import { ACTIVE_THEME } from "../../../theme/ids"

const WrapperStyles = (backgroundColor) => {
    return {
        backgroundColor,
        paddingBottom: 120,
        paddingLeft: 120,
        paddingRight: 120,
        paddingTop: 80
    }
}

const ActiveBorderStyles = (themeId, activeThemeId) => {
    return themeId === activeThemeId
        ? {
            width: '100%',
            height: '100%',
            borderColor: 'blue',
            borderWidth: 2,
        }
        : {}
}

// Render
const UITheme = ({ themeID = 'light', index }) => {
    return (
        <Artboard name={themeID} style={{position:'absolute', x: 0, marginLeft: `${index * 1200}px`}}>
            <View style={ActiveBorderStyles(themeID, ACTIVE_THEME)}>
                <View name={'theme_' + themeID} style={WrapperStyles(uiColor.background.standard[themeID])}>
                    <Color colorGroups={appColor} themeID={themeID}/>
                    <Shadow themeID={themeID} />
                    <Typography typographyStyles={appTypography(themeID)} themeID={themeID}/>
                </View>
            </View>
        </Artboard>
    )
}

export default UITheme
