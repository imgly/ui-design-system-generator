// Modules
import React from 'react'
import styled from 'styled-components/primitives'
import chroma from 'chroma-js'
import { View } from 'react-sketchapp'
import { generateSymbol } from '../../util/index'

// Imports
import UITypo from '../UI/Typo'

const labels = ( color, name, groupName) => {
    return {
        name: `${name}`,
        rgba: `${chroma(color).rgba()}`,
        hex: `${chroma(color).hex()}`.toUpperCase(),
    }
}

// Components
const Wrapper = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 24px;
  width: 22%;
  box-sizing: border-box;
  margin-left: ${props => props.index % 4 === 0 || props.index === 0 ? '0px' : '4%'};
`

const Swatch = styled.View`
  height: 40px;
  width: 40px;
  background-color: ${props => props.color};
`

const SwatchOutline = styled.View`
  height: 40px;
  width: 40px;
  border: 1px solid ${props => props.color};
  border-radius: ${props => props.borderRadius};
`
const SwatchOutlineStyle = (borderColor, borderRadius) => {
    return {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: borderColor,
        borderRadius: borderRadius
    }
}


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
const ColorSwatch = ({ color, name, width, groupName, index, themeID }) => {
    const _labels = labels(color, name, groupName)
    const borderRadii = ['0px', '4px', '8px', '100%']

    const SwatchSymbol = generateSymbol(() => <Swatch color={color}/>, ['color', groupName, name], themeID)

    borderRadii.map(borderRadius => {
        generateSymbol(() => <View
            style={SwatchOutlineStyle(color, borderRadius)}
            resizingConstraint={{ top: true, right: true, bottom: true, left: true, fixedHeight: false, fixedWidth: false }}
            borderColor={color}
            borderRadius={borderRadius}/>, ['color', groupName, name, 'outline', `border ${parseInt(borderRadius)}`], themeID)
    })

    return (
        <Wrapper name={ 'Color ' + name } width={width} index={index}>
            <SwatchSymbolMask name='swatchMask' color={color}>
                <SwatchSymbol />
            </SwatchSymbolMask>
            <View style={{ marginTop: '16px' }} name='swatchDescription'>
                {Object.keys(_labels).map(name => <DescriptionItem themeID={themeID} value={_labels[name]} label={name} key={name} />)}
            </View>
        </Wrapper>
    )
}

export default ColorSwatch
