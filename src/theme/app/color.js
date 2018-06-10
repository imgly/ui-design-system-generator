import chroma from 'chroma-js'
import { DARK_THEME, LIGHT_THEME } from '../ids'

// The base defines the hue inside interface elements e.g. so greys get a shift of blue
const UI_BASE = '#1E47FB'

const UI_BASE_DARK = '#232326'
const UI_PRIMARY_DARK = UI_BASE

const UI_BASE_LIGHT = '#FDFDFD'
const UI_PRIMARY_LIGHT = UI_BASE

const getColorHue = (color) => {
    // const baseColor = UI_BASE
    // const colorLuminance = chroma(color).luminance()
    // const mixedColor = chroma.mix(color, chroma(baseColor).set('hcl.l', colorLuminance).rgb(), 0.04 - 0.04 * colorLuminance * colorLuminance, 'rgb')
    return color.hex()
}

export const color = {
    // Text Colors are used for text throughout the application, no opacity may be applied
    text: {
        primary: {
            [DARK_THEME]: '#fffdfd',
            [LIGHT_THEME]: '#1B2733',
        },

        secondary: {
            [DARK_THEME]: '#dedfe0',
            [LIGHT_THEME]: '#646E75',
        },

        hint: {
            [DARK_THEME]: '#a9b0b4',
            [LIGHT_THEME]: '#848d94',
        },

        white: {
            [DARK_THEME]: '#ffffff',
            [LIGHT_THEME]: '#ffffff',
        }
    },

    accent: {
        primary: {
            [DARK_THEME]: UI_PRIMARY_DARK,
            [LIGHT_THEME]: UI_PRIMARY_LIGHT,
            outline: true
        },

        danger: {
            [DARK_THEME]: '#ffb045',
            [LIGHT_THEME]: '#ff3d80',
            outline: true
        },
    },

    state: {
        disabled: {
            [DARK_THEME]: getColorHue(chroma(UI_BASE_DARK).brighten(0.4)),
            [LIGHT_THEME]: getColorHue(chroma(UI_BASE_LIGHT).darken(0.2)),
            outline: true,
            state: true
        },

        standard: {
            [DARK_THEME]: getColorHue(chroma(UI_BASE_DARK).brighten(0.6)),
            [LIGHT_THEME]: getColorHue(chroma(UI_BASE_LIGHT).darken(0.6)),
            outline: true,
            state: true
        },

        hover: {
            [DARK_THEME]: getColorHue(chroma(UI_BASE_DARK).brighten(0.8)),
            [LIGHT_THEME]: getColorHue(chroma(UI_BASE_LIGHT).darken(0.7)),
            outline: true,
            state: true
        },

        pressed: {
            [DARK_THEME]: getColorHue(chroma(UI_BASE_DARK).brighten(1)),
            [LIGHT_THEME]: getColorHue(chroma(UI_BASE_LIGHT).darken(0.9)),
            outline: true,
            state: true
        },

        // Note the active state in most cases is the primary color
        active: {
            [DARK_THEME]: UI_PRIMARY_DARK,
            [LIGHT_THEME]: UI_PRIMARY_LIGHT,
            outline: true
        },
    },


    // These colors are used throughout the UI for backgrounds
    interface: {
        // Used to clearly separate two ui components or make edges appear harder.
        separator: {
            [DARK_THEME]: 'rgba(255,255,255,0.1)',
            [LIGHT_THEME]: 'rgba(0,0,0,0.1)',
        },

        // Slider
        sliderHandle: {
            [DARK_THEME]: getColorHue(chroma(UI_BASE_DARK).brighten(5)),
            [LIGHT_THEME]: chroma(UI_BASE_LIGHT).brighten(4.5).hex(),
        },

        sliderBackground: {
            [DARK_THEME]: getColorHue(chroma(UI_BASE_DARK).darken(0.6)),
            [LIGHT_THEME]: '#E2E1E6',
        },

        // Navigation Bar
        navigation: {
            [DARK_THEME]: getColorHue(chroma(UI_BASE_DARK).brighten(0.2)),
            [LIGHT_THEME]: '#FFFFFF',
        },

        // Tool Bar
        tool: {
            [DARK_THEME]:  getColorHue(chroma(UI_BASE_DARK)),
            [LIGHT_THEME]: '#FBFBFB',
        },

        // Canvas
        canvas: {
            [DARK_THEME]: getColorHue(chroma(UI_BASE_DARK).darken(0.5)),
            [LIGHT_THEME]: '#EFF0F0',
        },
    }
}

