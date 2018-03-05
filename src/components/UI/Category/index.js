// Modules
import React from 'react'
import styled from 'styled-components/primitives'
import { View } from 'react-sketchapp'

import UITypo from '../Typo/index'

const Wrapper = styled.View`
  left: ${props => props.x};
  box-sizing: border-box;
  padding: 120px 120px 0px;  
`

// Render
const Category = ({ category, children, x, themeID }) => (
    <Wrapper name={category.toLowerCase()}>
        <UITypo type='h2' themeID={themeID} name={'Title'}>{category}</UITypo>
        <View name='content'>
            {children}
        </View>
    </Wrapper>
)

export default Category
