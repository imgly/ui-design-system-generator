import { color } from './color'
import { ACTIVE_THEME } from '../ids'

const baseStyles = {
    fontSize: '14px',
    lineHeight: '24px',
    fontFamily: 'Fira Sans',
    color: 'primary',
    marginBottom: '0px',
}

const typography = {
    'h1': {
        style: {
            fontSize: '32px',
            lineHeight: '32px',
            color: 'primary'
        }
    },

    'h2': {
        style: {
            fontSize: '24px',
            lineHeight: '28px',
            color: 'primary'
        }
    },

    'button': {
        style: {
            fontSize: 12.5,
            letterSpacing: 1.92,
            lineHeight: 12,
            color: 'primary'
        }
    },
}

// Todo: allow multiple variations as object
const textAlign = ['left', 'center', 'right']

const mergedStyles = Object.keys(typography).reduce((acc, cur, ind, arr) => {
    textAlign.map((alignment, index) => {
        const c = typography[cur].style.color
        acc[cur + '/' + alignment] = {
            ...baseStyles,
            ...typography[cur].style,
            color: color.text[c][ACTIVE_THEME],
            textAlign: alignment
        }
    })

    return acc
}, {})

export default mergedStyles