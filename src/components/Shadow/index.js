// Modules
import React from 'react'
import { View } from 'react-sketchapp'

// Imports
import Category from '../UI/Category'
import ShadowSwatch from './ShadowSwatch'

import { GLOBAL_WIDTH } from '../../theme/ids'
import shadows from '../../theme/app/shadow'
import uiShadows from '../../theme/ui/shadow'


// Constants
const SWATCH_PER_COLUMN = 4


const ColorSwatchWrapperStyle = {
    width: GLOBAL_WIDTH,
    marginBottom: 16,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start'
}

// Render
const Shadow = ({ themeID }) => {
    const shadowKeys = Object.keys(shadows)
    const uiShadowKeys = Object.keys(shadows)

    return (
        <Category themeID={themeID} category={'Shadow'}>
            <View name={'contentWrapper'} style={{marginTop: '24px'}}>
                <View style={ColorSwatchWrapperStyle} name='shadows'>
                    {shadowKeys.map((shadow, index) =>
                        <ShadowSwatch
                            key={index}
                            name={shadow}
                            index={index}
                            width={GLOBAL_WIDTH/SWATCH_PER_COLUMN}
                            shadows={shadows[shadowKeys[index]]}
                            uiShadows={uiShadows[uiShadowKeys[index]]}
                            themeID={themeID}
                        />)}
                </View>
            </View>
            )}
        </Category>
    )
}

export default Shadow
