// Modules
import React from 'react'
import styled from 'styled-components/primitives'
import chroma from 'chroma-js'
import { View } from 'react-sketchapp'
import { generateSymbol } from '../../util/index'

// Constants
import { BORDER_RADII, BORDER_WIDTH } from '../../theme/ids'

// Imports
import UITypo from '../UI/Typo'

const getLabels = (shadow, name) => {
    return {
        name: `${name}`,
        rgba: `${(shadow)}`,
        hex: `${(shadow)}`
    }
}

// Components
// TODO: replace with inline styles
const Wrapper = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 24px;
  width: 22%;
  box-sizing: border-box;
  margin-left: ${props => props.index % 4 === 0 || props.index === 0 ? '0px' : '4%'};
`

// TODO: replace with inline styles
const Swatch = styled.View`
  height: 40px;
  width: 40px;
  background-color: ${props => props.color};
`

const SwatchSymbol = styled.View`
  height: 40px;
  position: absolute;
  width: 40px;
  border-radius: ${props => props.borderRadius};
`

const SwatchSymbolStyle = (borderRadius) => {
    return {
        width: 40,
        backgroundColor: 'rgba(0,0,0,0)',
        position: 'absolute',
        height: 40,
        borderRadius: borderRadius,
    }
}

// TODO: find out why boxShadow is not working
const SwatchSymbolMaskStyle = (color) => {
    return {
        width: '100%',
        height: 24,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 4,
        backgroundColor: color,
        boxSizing: 'border-box',
        boxShadow: `0px 4px 8px rgba(0,0,0, ${0.1 + 0.2 - (chroma(color).luminance() * 0.19)})`
    }
}

// TODO: replace with inline styles
const SwatchSymbolMask = styled.View`
  width: 100%;
  border-radius: 4px;
  height: 24px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: 0 4px 8px rgba(0,0,0, ${props => 0.1 + 0.2 - (chroma(props.color).luminance() * 0.19) });
  background-color: ${props => props.color};
`

// TODO: replace with inline styles
const DescriptionItemStyle = styled.View`
  width: 140px;
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
`

const DescriptionItem = ({ label, value, themeID }) => (
    <DescriptionItemStyle name={label}>
        <UITypo type='caption' name='value' themeID={themeID} secondary={label !== 'name'}>{value.replace(/\b\w/g, l => l.toUpperCase()).replace(/,/g, ', ')}</UITypo>
    </DescriptionItemStyle>
)

// Render
const ShadowSwatch = ({ shadows, name, width, index, themeID }) => {

    // const SwatchSymbol = generateSymbol(() => <Swatch color={color}/>, ['color', groupName, name], themeID)

    BORDER_RADII.map(borderRadius => {
        generateSymbol(() =>
            <View
                style={{ width: 40, height: 40 }}
                resizingConstraint={{top: true, right: true, bottom: true, left: true, fixedHeight: false, fixedWidth: false }} >
                {shadows.map((shadow) =>
                    <View style={SwatchSymbolStyle(borderRadius)}/>
                )}
            </View>
            , ['shadow', name, `border ${parseInt(borderRadius)}`], themeID)
    })

    return (
        <Wrapper name={ 'swatch_' + name } width={width} index={index}>

        </Wrapper>
    )
}

export default ShadowSwatch
