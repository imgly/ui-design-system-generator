export const LIGHT_THEME = 'light'
export const DARK_THEME = 'dark'

export const ACTIVE_THEME = DARK_THEME
export const THEME_NAME = 'PESDK'

// When the state prop is defined to render state fills at a lower opacity than borders
export const STATE_FILL_OPACITY = 0.4

// Define the border radii that will be crated as color symbols
// Important: only the colors that have outline set to true in ./color get outline symbols
export const BORDER_RADII = [
    {
        name: 'S',
        value: 2
    },
    {
        name: 'M',
        value: 4
    },
    {
        name: 'L',
        value: 8
    },
    {
        name: 'Max',
        value: 100
    }
]

export const BORDER_WIDTH = 1

export const GLOBAL_WIDTH = 720

export const TYPOGRAPHY_ALIGNMENTS = ['left', 'center', 'right']