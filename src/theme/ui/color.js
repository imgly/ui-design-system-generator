import chroma from 'chroma-js'
import { DARK_THEME, LIGHT_THEME } from '../ids'

const UI_BASE_DARK = '#141415'
const UI_BASE_LIGHT = '#FDFDFD'


export default {
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
            [DARK_THEME]: chroma(UI_BASE_DARK).hex(),
            [LIGHT_THEME]: chroma(UI_BASE_LIGHT).brighten(1).hex(),
        },

        shadow: {
            [DARK_THEME]: chroma(UI_BASE_DARK).hex(),
            [LIGHT_THEME]: chroma(UI_BASE_LIGHT).brighten(1).hex(),
        }
    }
}