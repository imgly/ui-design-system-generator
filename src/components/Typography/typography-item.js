import React from 'react'
import styled from 'styled-components/primitives'
import { View } from 'react-sketchapp'

import AppTheme from '../../theme/app'
import UITheme from '../../theme/ui'

const AppTypoTheme = AppTheme.typography

import Typo  from './typography-styles'
import UITypo from '../../components/UI/Typo'
import { generateSymbol } from '../../util/index'

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 32px;
  padding-top: 28px;
`

const Separator = styled.View`
  background-color: ${props => UITheme.color[props.themeID].background[2]};
  width: 100%;
  height: 1px;
  position: absolute;
  bottom: 0;
`


const TypographyItem = ({ type, themeID }) => {

    const TypeSymbol = generateSymbol(() => <Typo type={type} themeID={themeID}>{AppTypoTheme[type].name}</Typo>,
        ['Typography', AppTypoTheme[type].name],
        themeID
    )

    return (
        <Wrapper>
            <View style={{marginRight: '32px'}}>
                <UITypo type='caption'>{AppTypoTheme[type].style.fontSize.replace(/\D/g,'')} / {AppTypoTheme[type].style.lineHeight.replace(/\D/g,'')}</UITypo>
            </View>
            <View stlye={{position: 'absolute', left: '132px'}}>
                <TypeSymbol type={type} themeID={themeID}>{AppTypoTheme[type].name}</TypeSymbol>
            </View>
            <View style={{position: 'absolute', right: '0'}}>
                <View style={{marginTop: '-4px'}}>
                    <UITypo type='caption' style={{textAlign: 'right'}}>{AppTypoTheme[type].name}</UITypo>
                    <UITypo type='caption' style={{textAlign: 'right'}}>Roboto 100</UITypo>
                </View>
            </View>
            <Separator themeID={themeID}/>
        </Wrapper>
    )
}

export default TypographyItem