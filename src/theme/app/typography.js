import { css } from 'styled-components'
import themeColors from './color'
import * as React from 'react'

export const fontFamily = "Acumin Pro SemiCondensed"

/**
 * Generate the base css for each typography styles.
 *
 * @param {String} align
 * @return {Function}
 */

export const baseCSS = (
    align = 'left'
) => css`
  text-align: ${align};
  color: ${themeColors.light.text.primary};
  font-family: ${fontFamily};
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0;
  display: inline;
`

/**
 * Transforms that will be generated as symbols.
 * Each key needs to be added to the baseCSS function as a parameter and the corresponding css.
 * The generated symbols will NOT appear in the stylesheet.
 */

export const transforms = {
    align: [
        'left',
        'center',
        'right'
    ]
}

/**
 * Generate the tag css for the given tag.
 *
 * @param {String} tag
 * @param {String} themeID
 * @return {Function}
 */

export const tagCSS = ({type = 'paragraph', themeID = 'light'}) => {
    return generateCSS({...typography[type].style, themeID})
}


const generateCSS = (
    {
        fontSize = '14px',
        lineHeight = '24px',
        fontFamily = 'Roboto',
        color = 'primary',
        marginBottom = '0px',
        themeID
    }
) => {
    return css`
          font-size: ${fontSize};
          font-family: ${fontFamily};
          line-height: ${lineHeight};
          color: ${themeColors[themeID].text[color]};
          margin-bottom: ${marginBottom};
        `
}


const typography = {

    'h1': {
        name: 'H1',
        style: {
            fontSize: '32px',
            lineHeight: '32px',
            color: 'primary'
        }
    },

    'h2': {
        name: 'H2',
        style: {
            fontSize: '24px',
            lineHeight: '28px',
            color: 'primary'
        }
    },

    'h3': {
        name: 'H3',
        style: {
            fontSize: '20px',
            lineHeight: '24px',
            color: 'primary'
        }
    },

    'h4': {
        name: 'H4',
        style: {
            fontSize: '20px',
            lineHeight: '24px',
            color: 'primary'
        }
    },

    'paragraph': {
        name: 'Paragraph',
        style: {
            fontSize: '14px',
            lineHeight: '24px',
            color: 'secondary'
        }
    },

    'caption': {
        name: 'Caption',
        style: {
            fontSize: '12px',
            lineHeight: '13px',
            color: 'hint'
        }
    },
}


export default typography