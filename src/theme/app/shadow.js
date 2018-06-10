import { LIGHT_THEME, DARK_THEME, ACTIVE_THEME } from '../ids'

const shadowKeyUmbraOpacity = {
    [LIGHT_THEME]: 0.2,
    [DARK_THEME]: 0.3
}

const shadowKeyPenumbraOpacity = {
    [LIGHT_THEME]: 0.14,
    [DARK_THEME]: 0.2
}

const shadowAmbientShadowOpacity = {
    [LIGHT_THEME]: 0.12,
    [DARK_THEME]: 0.18
}

const shadows = {
    0: [
        [0, 0, 0, 0], // KeyUmbra
        [0, 0, 0, 0], // PenUmbra
        [0, 0, 0, 0]  // Ambient
    ],
    1: [
        [0, 1, 3, 0],
        [0, 1, 1, 0],
        [0, 2, 1, -1]
    ],
    2: [
        [0, 1, 5, 0],
        [0, 2, 2, 0],
        [0, 3, 1, -2]
    ],
    3: [
        [0, 1, 8, 0],
        [0, 3, 4, 0],
        [0, 3, 3, -2]
    ],
    4: [
        [0, 2, 4, -1],
        [0, 4, 5, 0],
        [0, 1, 10, 0]
    ],
    6: [
        [0, 3, 5, -1],
        [0, 6, 10, 0],
        [0, 1, 16, 0]
    ]
}

const createSketchAppShadowStyles = (shadows = shadows) => {
    const shadowStyles = {}

    for (let k in shadows) {
            const currentShadowStyles = shadows[k]
            const key = currentShadowStyles[0]
            const pen = currentShadowStyles[1]
            const amb = currentShadowStyles[2]

            const shadowStyle = ({xOffset, yOffset, spread, opacity, radius, shadowColor = 'black'}) => {
                return {
                    shadowColor,
                    shadowOffset: { width: xOffset, height: yOffset },
                    shadowSpread: spread,
                    shadowOpacity: opacity,
                    shadowRadius: radius
                }
            }

            shadowStyles[k] = [
                shadowStyle({
                    xOffset: key[0],
                    yOffset: key[1],
                    radius: key[2],
                    spread: key[3],
                    opacity: shadowKeyUmbraOpacity[ACTIVE_THEME],
                }),
                shadowStyle({
                    xOffset: pen[0],
                    yOffset: pen[1],
                    radius: pen[2],
                    spread: pen[3],
                    opacity: shadowKeyPenumbraOpacity[ACTIVE_THEME],
                }),
                shadowStyle({
                    xOffset: amb[0],
                    yOffset: amb[1],
                    radius: amb[2],
                    spread: amb[3],
                    opacity: shadowAmbientShadowOpacity[ACTIVE_THEME],
                })
            ]
    }

    return shadowStyles
}

const createShadowStyles = (shadows = shadows) => {
    const shadowStyles = {}

    for (let k in shadows) {
        const currentShadowStyles = shadows[k]
        const key = currentShadowStyles[0]
        const pen = currentShadowStyles[1]
        const amb = currentShadowStyles[2]

        shadowStyles[k] = [
            `${key[0]}px ${key[1]}px ${key[2]}px ${key[3]}px rgba(0, 0, 0, ${shadowKeyUmbraOpacity[ACTIVE_THEME]})`,
            `${pen[0]}px ${pen[1]}px ${pen[2]}px ${pen[3]}px rgba(0, 0, 0, ${shadowKeyPenumbraOpacity[ACTIVE_THEME]})`,
            `${amb[0]}px ${amb[1]}px ${amb[2]}px ${amb[3]}px rgba(0, 0, 0, ${shadowAmbientShadowOpacity[ACTIVE_THEME]})`,
        ]
    }

    return shadowStyles
}

export default createSketchAppShadowStyles(shadows)