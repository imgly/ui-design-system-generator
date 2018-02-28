import chroma from 'chroma-js'
import { DARK_THEME, LIGHT_THEME } from './ids'

const UI_BASE_DARK = '#232326'
const UI_BASE_LIGHT = '#FDFDFD'

const light = {

    // Text Colors are used for text throughout the application, no opacity may be applied
    text: {
        primary: '#1B2733',
        secondary: '#464F56',
        hint: '#697279',
    },

    // Accent Colors are used for active states and call to action buttons
    accent: {
        primary: '#1E47FB',
        danger: '#ff3d80'
    },

    // These colors are used throughout the UI for backgrounds
    background: {
        separator: chroma(UI_BASE_LIGHT).darken(1).hex(),
        textInput: chroma(UI_BASE_LIGHT).darken(0.4).hex(),

        /* Slider */
        sliderKnob: chroma(UI_BASE_LIGHT).brighten(4.5).hex(),
        sliderBackground: chroma(UI_BASE_LIGHT).darken(0.6).hex() ,

        /* NavigationBar */
        navigationBar: chroma(UI_BASE_LIGHT).darken(0.4).hex(),

        /* ToolBar */
        toolBar: UI_BASE_LIGHT,

        /* Canvas */
        canvas: chroma(UI_BASE_LIGHT).darken(1).hex()
    }
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
        separator: chroma(UI_BASE_DARK).darken(1).hex(),
        textInput: chroma(UI_BASE_DARK).darken(0.4).hex(),

        /* Slider */
        sliderKnob: chroma(UI_BASE_DARK).brighten(4.5).hex(),
        sliderBackground: chroma(UI_BASE_DARK).darken(0.6).hex() ,

        /* NavigationBar */
        navigationBar: chroma(UI_BASE_DARK).darken(0.4).hex(),

        /* ToolBar */
        toolBar: UI_BASE_DARK,

        /* Canvas */
        canvas: chroma(UI_BASE_DARK).darken(0.8).hex()
    }
}

const color = {
    [DARK_THEME]: dark,
    [LIGHT_THEME]: light
}

export default color