// Modules
import React from 'react'
import styled from 'styled-components/primitives'
import { Artboard, makeSymbol, Text, View } from 'react-sketchapp'

// Theme
import appTheme from '../../../theme/app'
import uiTheme from '../../../theme/ui'

// Components
import Color from '../../Color'
// import Typography from '../../Typography'

const Wrapper = styled.View`
  background-color: ${props =>  props.color};
  padding-bottom: 120px;
`

// Render
const UITheme = ({ themeID = 'light', index }) => {
    return (
        <Artboard name={themeID} style={{position:'absolute', x: 0, marginLeft: `${index * 1200}px`}}>
            <Wrapper color={uiTheme.color[themeID].background[1]}>
                <Color colorGroups={appTheme.color[themeID]} themeID={themeID}/>
            </Wrapper>
        </Artboard>
    )
}

export default UITheme
