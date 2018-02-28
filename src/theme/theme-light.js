/* @module */
/*
 * This file is part of PhotoEditorSDK.
 *
 * Copyright (C) 2016-2017 9elements GmbH <contact@9elements.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, without
 * modification, are permitted provided that the following license agreement
 * is approved and a legal/financial contract was signed by the user.
 * The license agreement can be found under following link:
 *
 * https://www.photoeditorsdk.com/LICENSE.txt
 */

const fonts = {
    sourcesansproregular: {
        fontFamily: 'sourcesansproregular',
        fontWeight: '400',
        fontStyle: 'normal',
        src: 'fonts/SourceSansPro-Regular.woff'
    },
    sourcesansprobold: {
        fontFamily: 'sourcesansprobold',
        fontWeight: 'bolder',
        fontStyle: 'normal',
        src: 'fonts/SourceSansPro-Bold.woff'
    },
    sourcesansprosemibold: {
        fontFamily: 'sourcesansprosemibold',
        fontWeight: 'bold',
        fontStyle: 'normal',
        src: 'fonts/SourceSansPro-Semibold.woff'
    }
}

module.exports = {
    primaryColor: '#2D7BFF',
    primaryColorRGB: '45, 123, 255',
    backgroundColor: '#EEEEEE',
    backgroundColorRGB: '238, 238, 238',
    controlsKnobColor: 'white',
    controlsBackgroundColor: '#FAFAFA',
    controlsBackgroundColorRGB: '250, 250, 250',
    controlsLightBackgroundColor: '#FFFFFF',
    controlsOutlineColor: 'rgba(255, 255, 255, 0.6)',
    controlsSeparatorColor: '#E2E1E6',
    navigationBackgroundColor: '#FFFFFF',
    navigationBackgroundColorRGB: '255, 255, 255',
    textColor: '#1B2733',
    dimmedTextColor: '#464F56',
    dimmedTextColorRGB: '80, 79, 86',
    filterItemBackgroundColor: '#4b4b4c',
    secondaryControlsBackgroundColor: '#EEEEEE',
    secondaryControlsBackgroundColorRGB: '250, 250, 250',
    focusItemBackgroundColor: '#343437',
    sliderBackgroundColor: '#E2E1E6',
    darkSliderBackgroundColor: '#E2E1E6',
    sliderKnobColor: '#FFFFFF',
    sliderCircleKnobColor: '#c8c8d2',
    highlightColor: '#2675F8',
    highlightColorRGB: '38, 117, 253',
    darkHighlightColorRGB: '15, 47, 101',
    buttonBorderColor: '#E8E0E0',
    defaultShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.20)',

    modalErrorColor: '#C23A3A',
    modalWarningColor: '#C18226',
    modalLoadingColor: '#2D7BFF',

    zIndex (layer) {
        const layers = ['background', 'controls', 'controlsOverlays', 'overlays', 'navigation']
        const stride = 5
        return layers.indexOf(layer) * stride
    },

    transitionDuration: 0.3,
    listItemSlideInDelay: 100,

    scrollbarGradientSize: 64,

    uppercaseBoldFontFamily: 'sourcesansprosemibold',
    uppercaseSemiBoldFontFamily: 'sourcesansprosemibold',

    regularFontFamily: 'sourcesansproregular',
    mediumFontFamily: 'sourcesansprosemibold',
    fonts
}