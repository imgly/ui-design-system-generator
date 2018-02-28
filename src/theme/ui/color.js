import chroma from 'chroma-js'

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

const color = {
    dark,
    light
}

export default color