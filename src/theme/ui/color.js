import chroma from 'chroma-js'
import { DARK_THEME, LIGHT_THEME } from '../ids'

const UI_BASE_DARK = '#141415'
const UI_BASE_LIGHT = '#FDFDFD'

const light = {

    // Text Colors are used for text throughout the application, no opacity may be applied
    text: {
        primary: '#1B2733',
        secondary: '#464F56',
        hint: '#727B82'
    },

    // Accent Colors are used for active states and call to action buttons
    accent: {
        primary: '#1E47FB',
        danger: '#ff3d80'
    },

    // These colors are used throughout the UI for backgrounds
    background: {
        1: '#FFFFFF',
        2: '#e2e2e2'
    },
}

const dark = {
    // Text Colors are used for text throughout the application, no opacity may be applied
    text: {
        primary: '#fffdfd',
        secondary: '#dedfe0',
        hint: '#a9b0b4'
    },

    // Accent Colors are used for active states and call to action buttons
    accent: {
        primary: '#1E47FB',
        danger: '#ff3d80'
    },

    // These colors are used throughout the UI for backgrounds
    background: {
        1: '#1D1D1E',
        2: '#2f2f32'
    }
}

export const _color = {
    // Text Colors are used for text throughout the application, no opacity may be applied
    text: {
        primary: {
            [DARK_THEME]: '#fffdfd',
            [LIGHT_THEME]: '#1B2733',
        },

        secondary: {
            [DARK_THEME]: '#dedfe0',
            [LIGHT_THEME]: '#464F56',
        },

        hint: {
            [DARK_THEME]: '#a9b0b4',
            [LIGHT_THEME]: '#697279',
        },
    },

    // Accent Colors are used for active states and call to action buttons
    accent: {
        primary: {
            [DARK_THEME]: '#1E47FB',
            [LIGHT_THEME]: '#1E47FB',
            outline: true
        },

        danger: {
            [DARK_THEME]: '#ff3d80',
            [LIGHT_THEME]: '#ff3d80',
            outline: true
        },
    },

    // These colors are used throughout the UI for backgrounds
    background: {
        // Used to clearly separate two ui components or make edges appear harder.
        standard: {
            [DARK_THEME]: chroma(UI_BASE_DARK).darken(1).hex(),
            [LIGHT_THEME]: chroma(UI_BASE_LIGHT).brighten(1).hex(),
        }
    }
}

const color = {
    dark,
    light
}

export default color