import React from 'react'
import styled, { css } from 'styled-components/primitives'
import { baseCSS, tagCSS } from '../../../theme/ui/typography'

const UITypo = ({
    type,
    align,
    children,
    themeID,
    secondary
}) => {
    const Component =  styled.Text`
      ${baseCSS(align)};
      ${tagCSS({type, themeID})};
      opacity: ${secondary ? 0.65 : 1};
    `

    return (
        <Component>{children}</Component>
    )
}

export default UITypo

