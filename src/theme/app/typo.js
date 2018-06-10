import { TYPOGRAPHY_ALIGNMENTS } from '../ids'
import { color } from './color'
const textColor = color.text

const fontFamily = {
    primary: 'IBMPlexSansCond-Medium'
}

const baseStyles = {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: fontFamily.primary,
    fontWeight: '400',
    color: textColor.primary,
    marginBottom: '0px',
}

export const typographyStyles = {
    'Headline 1': {
        style: {
            fontSize: 32,
            lineHeight: 32,
            color: textColor.primary
        }
    },

    'Headline 2': {
        style: {
            fontSize: 24,
            lineHeight: 28,
            color: textColor.primary
        }
    },
    
    'Label': {
        style: {
            color: color.text.hint,
            fontSize: 13,
            lineHeight: 16
        }
    },

    'Body': {
        style: {
            fontSize: 14,
            lineHeight: 18,
            color: textColor.secondary
        }
    },

    'Button Text': {
        style: {
            letterSpacing: 1.5,
            lineHeight: 16,
            fontSize: 12,
            fontFamily: "IBM Plex Sans Condensed Medium",
            textTransform: 'uppercase',
            color: textColor.secondary,
            width: 108
        },
        styleVariations: {
            'Disabled': {
                opacity: 0.5
            },
            'White': {
                color: textColor.white
            },
            'OnImage': {
                color: textColor.white,
                shadowColor: '#000000',
                shadowOffset: { width: 0, height: 1 },
                shadowSpread: 3,
                shadowOpacity: 0.5,
                shadowRadius: 4
            }
        }
    },
}

const mergedStyles = (themeId) => Object.keys(typographyStyles).reduce((acc, cur, ind, arr) => {
    TYPOGRAPHY_ALIGNMENTS.map((alignment, index) => {
        const defaultStyle = {
            ...baseStyles,
            ...typographyStyles[cur].style,
            color: typographyStyles[cur].style.color[themeId],
            textAlign: alignment,
        }

        // if the style contains variations
        if (typographyStyles[cur].styleVariations) {
            Object.keys(typographyStyles[cur].styleVariations).forEach(variation => {
                const variationStyles = typographyStyles[cur].styleVariations[variation]

                acc[alignment + '/' + cur + '/' + variation] = {
                    ...defaultStyle,
                    ...variationStyles,
                    color: variationStyles.color
                        ? variationStyles.color[themeId]
                        : defaultStyle.color,
                }
            })
        }

        acc[alignment + '/' + cur + '/Standard' ] = {
            ...defaultStyle
        }

    })

    return acc
}, {})

export default mergedStyles