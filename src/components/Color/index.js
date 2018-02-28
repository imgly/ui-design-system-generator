// Modules
import React from 'react'
import { View } from 'react-sketchapp'
import styled from 'styled-components/primitives'

// Imports
import ColorSwatch from './color-swatch'
import Category from '../UI/Category'
import UITypo from '../UI/Typo/index'

// Constants
const SWATCH_PER_COLUMN = 3
const WIDTH = 720

const ColorSwatchWrapperDiv = styled.View`
  width: 720px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 16px;
  justify-content: flex-start;
`

// Render
const Color = ({ colorGroups, themeID }) => (
    <Category themeID={themeID} category={'Color'}>
        <View style={{marginTop: '24px'}}>
            {Object.keys(colorGroups).map(colorGroup =>
                <View>
                    <UITypo type='h3' themeID={themeID}>{colorGroup.replace(/\b\w/g, l => l.toUpperCase())}</UITypo>
                    <ColorSwatchWrapperDiv name='ColorSwatchWrapper' key={colorGroup}>
                        {Object.keys(colorGroups[colorGroup]).map((color, index) =>
                            <ColorSwatch
                                themeID={themeID}
                                color={colorGroups[colorGroup][color]}
                                groupName={colorGroup}
                                name={color}
                                index={index}
                                key={color}
                                width={WIDTH/SWATCH_PER_COLUMN}
                            />)}
                    </ColorSwatchWrapperDiv>
                </View>
            )}
        </View>
    </Category>
)

export default Color
