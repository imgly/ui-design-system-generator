// Modules
import React from 'react'
import { View, Text } from 'react-sketchapp'

import TypographyItem from './TypographyItem'
import Category from '../UI/Category/index'
import { generateSymbol } from "../../util";
import { ACTIVE_THEME } from "../../theme/ids";

const Typography = ({ themeID = 'light', typographyStyles }) => {
    const typographyStylesArray = Object.keys(typographyStyles)
    return (
        <Category themeID={themeID} category={'Typography'}>
            <View name={'contentWrapper'} style={{marginBottom: '32px'}}>
                ${typographyStylesArray.map((type, index) => {
                    if (themeID === ACTIVE_THEME) {
                        generateSymbol(() => <Text style={typographyStyles[type]}>{type.split('/')[1]}</Text>,
                            ['Typography', type],
                            themeID
                        )
                    }

                    // only render the variations that are left aligned
                    if (!type.includes('left')) { return }
                    return (
                        <TypographyItem
                            name={type}
                            styles={typographyStyles[type]}
                            themeID={themeID}
                            key={index}
                        /> )}
                    )
                }
            </View>
        </Category>
    )
}

export default Typography