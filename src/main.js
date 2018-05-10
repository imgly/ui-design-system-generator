/* eslint-disable react/jsx-filename-extension, import/no-named-as-default-member */

import React from 'react'
import { render, Page, Document, TextStyles } from 'react-sketchapp'

import UITheme from './components/UI/Theme'
import { LIGHT_THEME, DARK_THEME } from './theme/ids'
import appTheme from './theme/app'


const themes = [
    LIGHT_THEME,
    DARK_THEME
]



const Doc = () => (
    <Document>
        <Page name='StyleSystem'>
            {themes.map((theme, index) => <UITheme themeID={theme} index={index} key={index}/>)}
        </Page>
    </Document>
)

export default (context) => {
    TextStyles.create({
        context: context,
        clearExistingStyles: true,
    }, appTheme.typography)

    render(<Doc />);
}
