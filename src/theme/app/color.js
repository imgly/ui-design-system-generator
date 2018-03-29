import chroma from 'chroma-js'
import { DARK_THEME, LIGHT_THEME } from '../ids'

// The base defines the hue inside interface elements e.g. so greys get a shift of blue
const UI_BASE = '#0066ff'

// 232326
const UI_BASE_DARK = '#232326'
const UI_PRIMARY_DARK = '#1E47FB'

const UI_BASE_LIGHT = '#FDFDFD'
const UI_PRIMARY_LIGHT = '#1E47FB'

const getColorHue = (color) => {
    const baseColor = UI_BASE
    const colorLuminance = chroma(color).luminance()
    const mixedColor = chroma.mix(color, chroma(baseColor).set('hcl.l', colorLuminance).rgb(), 0.04 - 0.04 * colorLuminance * colorLuminance, 'rgb')
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
            [LIGHT_THEME]: '#464F56',
        },

        hint: {
            [DARK_THEME]: '#a9b0b4',
            [LIGHT_THEME]: '#697279',
        },
    },

    accent: {
        primary: {
            [DARK_THEME]: UI_PRIMARY_DARK,
            [LIGHT_THEME]: UI_PRIMARY_LIGHT,
            outline: true
        },

        danger: {
            [DARK_THEME]: '#ff3d80',
            [LIGHT_THEME]: '#ff3d80',
            outline: true
        },
    },

    // These colors are used throughout the UI for backgrounds
    interface: {

        /**
         * States
         * Are used for background and borders for elements like:
         * - Buttons
         * - Cards
         * - Input Fields
         *
         * Try to use those colors first, before defining a new color.
         *
         * When they use a border and background of the same type, the background alpha is set to:
         * - Light: 0.4
         * - Dark: 0.2
         */
        stateDisabled: {
            [DARK_THEME]: getColorHue(chroma(UI_BASE_DARK).brighten(0.2)),
            [LIGHT_THEME]: getColorHue(chroma(UI_BASE_LIGHT).darken(0.2)),
            outline: true
        },

        stateNormal: {
            [DARK_THEME]: getColorHue(chroma(UI_BASE_DARK).brighten(0.4)),
            [LIGHT_THEME]: getColorHue(chroma(UI_BASE_LIGHT).darken(0.6)),
            outline: true
        },

        stateHover: {
            [DARK_THEME]: getColorHue(chroma(UI_BASE_DARK).brighten(0.6)),
            [LIGHT_THEME]: getColorHue(chroma(UI_BASE_LIGHT).darken(0.7)),
            outline: true
        },

        // Note the active state in most cases is the primary color
        stateActive: {
            [DARK_THEME]: UI_PRIMARY_DARK,
            [LIGHT_THEME]: UI_PRIMARY_LIGHT,
            outline: true
        },

        // Used to clearly separate two ui components or make edges appear harder.
        separator: {
            [DARK_THEME]: chroma(UI_BASE_DARK).darken(1).hex(),
            [LIGHT_THEME]: getColorHue(chroma(UI_BASE_LIGHT).darken(0.4)),
        },

        // Slider
        sliderHandle: {
            [DARK_THEME]: getColorHue(chroma(UI_BASE_DARK).brighten(5)),
            [LIGHT_THEME]: chroma(UI_BASE_LIGHT).brighten(4.5).hex(),
        },

        sliderBackground: {
            [DARK_THEME]: getColorHue(chroma(UI_BASE_DARK).darken(0.6)),
            [LIGHT_THEME]: getColorHue(chroma(UI_BASE_LIGHT).darken(1.5)),
        },

        // Navigation Bar
        navigation: {
            [DARK_THEME]: getColorHue(chroma(UI_BASE_DARK).darken(0.4)),
            [LIGHT_THEME]: getColorHue(chroma(UI_BASE_LIGHT).darken(0.4)),
        },

        // Tool Bar
        tool: {
            [DARK_THEME]:  getColorHue(chroma(UI_BASE_DARK)),
            [LIGHT_THEME]: UI_BASE_LIGHT,
        },

        // Canvas
        canvas: {
            [DARK_THEME]: getColorHue(chroma(UI_BASE_DARK).darken(1)),
            [LIGHT_THEME]: getColorHue(chroma(UI_BASE_LIGHT).darken(0.4)),
        },
    }
}

