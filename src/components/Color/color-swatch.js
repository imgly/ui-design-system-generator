// Modules
import React from 'react'
import chroma from 'chroma-js'
import { View } from 'react-sketchapp'
import { generateSymbol } from '../../util/index'

// Constants
import { BORDER_RADII, BORDER_WIDTH } from '../../theme/ids'

// Imports
import UITypo from '../UI/Typo'
import shadow from '../../theme/ui/shadow'

const getLabels = ( color, name) => {
    return {
        name: `${name}`,
        rgba: `${chroma(color).rgba()}`,
        hex: `${chroma(color).hex()}`.toUpperCase(),
    }
}

// Components

const WrapperStyle = (index) => {
    return {
        width: '22%',
        marginBottom: 24,
        marginLeft: index % 4 === 0 || index === 0 ? 0 : '4%',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        boxSizing: 'border-box'
    }
}

const SwatchOutlineStyle = (borderColor, borderRadius) => {
    return {
        width: 40,
        height: 40,
        borderWidth: BORDER_WIDTH,
        borderStyle: 'solid',
        borderColor: borderColor,
        borderRadius: borderRadius
    }
}

// TODO: Add 0 4px 8px rgba(0,0,0, ${props => 0.1 + 0.2 - (chroma(props.color).luminance() * 0.19) to shadowGroup
const SwatchSymbolMaskStyle = (color) => {
    return {
        width: '100%',
        height: 24,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 4,
        backgroundColor: color,
        boxSizing: 'border-box',
    }
}

const DescriptionItemStyle = () => {
    return {
        width: 140,
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 8
    }
}

const DescriptionItem = ({ label, value, themeID }) => (
    <View name={label} style={DescriptionItemStyle()}>
        <UITypo type='caption' name='value' themeID={themeID} secondary={label !== 'name'}>{value.replace(/\b\w/g, l => l.toUpperCase()).replace(/,/g, ', ')}</UITypo>
    </View>
)

// Render
const ColorSwatch = ({ color, name, width, groupName, index, themeID, shouldRenderOutline }) => {
    const labels = getLabels(color, name, groupName)

    const SwatchSymbol = generateSymbol(() =>
        <View
            style={{ width: 40, height: 40, backgroundColor: color }}
        />, ['Color', 'Fill', 'Border None', groupName, name], themeID)

    if (shouldRenderOutline) {
        BORDER_RADII.map(borderRadius => {
            generateSymbol(() => <View
                style={SwatchOutlineStyle(color, borderRadius)}
                resizingConstraint={{ top: true, right: true, bottom: true, left: true, fixedHeight: false, fixedWidth: false }}
                borderColor={color}
                borderRadius={borderRadius}/>, ['Color', 'Outline', `Radius ${parseInt(borderRadius)}p`, groupName, name], themeID)
        })
    }

    return (
        <View name={ 'swatch_' + name } style={WrapperStyle(index)} >
            <View name='mask'
                  style={SwatchSymbolMaskStyle(color)}
                  shadowGroup={shadow[3][themeID]}
            >
                <SwatchSymbol />
            </View>
            <View style={{ marginTop: '16px' }} name='description'>
                {Object.keys(labels).map(name => <DescriptionItem themeID={themeID} value={labels[name]} label={name} key={name} />)}
            </View>
        </View>
    )
}

export default ColorSwatch
