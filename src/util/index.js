import { makeSymbol } from 'react-sketchapp'
import { ACTIVE_THEME, THEME_NAME } from '../theme/ids'

/**
 * Generate a Symbol and add it to the Symbols page.
 * If the theme is the active theme, overt the theme name.
 * @param {Function} component
 * @param {[String]} path
 * @param {String} themeID
 * @return {Function}
 */

export const generateSymbol = (
    component,
    path,
    themeID
) => {
    // TODO: Make editable
    const withSpace = true
    const withCapitalize= true
    const withMultipleThemes = true

    const pathSeparation = '/'

    // Add the theme name and theme ID at the start of the symbol name
    // e.g ProjectName/Dark/Color/Text/Primary
    let pathArray = [THEME_NAME, themeID, ...path]

    // UpperCase the first letter in each path string
    if (withCapitalize) pathArray = pathArray.map(e => e.replace(/\b\w/g, firstLetter => firstLetter.toUpperCase()))

    // Create the symbol name
    const pathString = pathArray.join().replace(/[,]/g, pathSeparation)

    // If the symbol equals the active theme, create a symbol and remove the theme specific path section
    if (themeID === ACTIVE_THEME) {
        makeSymbol(
            component,
            pathString
                .replace(
                    `${themeID.replace(/\b\w/g, firstLetter => firstLetter.toUpperCase())}${pathSeparation}`
                    , ''
                )
        )
    }

    return component
}