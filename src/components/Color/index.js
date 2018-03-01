// Modules
import React from 'react'
import { View } from 'react-sketchapp'
import styled from 'styled-components/primitives'

// Imports
import ColorSwatch from './color-swatch'
import Category from '../UI/Category'
import UITypo from '../UI/Typo/index'

import { GLOBAL_WIDTH } from '../../theme/ids'

// Constants
const SWATCH_PER_COLUMN = 3


const ColorSwatchWrapperStyle = {
    width: GLOBAL_WIDTH,
    marginBottom: 16,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start'
}

// Render
const Color = ({ colorGroups, themeID }) => (
    <Category themeID={themeID} category={'Color'}>
        <View style={{marginTop: '24px'}}>
            {Object.keys(colorGroups).map(colorGroup =>
                <View>
                    <UITypo type='h3' themeID={themeID}>{colorGroup.replace(/\b\w/g, l => l.toUpperCase())}</UITypo>
                    <View style={ColorSwatchWrapperStyle} name='ColorSwatchWrapper' key={colorGroup}>
                        {Object.keys(colorGroups[colorGroup]).map((color, index) =>
                            <ColorSwatch
                                themeID={themeID}
                                color={colorGroups[colorGroup][color][themeID]}
                                groupName={colorGroup}
                                name={color}
                                index={index}
                                shouldRenderOutline={!!colorGroups[colorGroup][color].outline}
                                key={color}
                                width={GLOBAL_WIDTH/SWATCH_PER_COLUMN}
                            />)}
                    </View>
                </View>
            )}
        </View>
    </Category>
)

export default Color
