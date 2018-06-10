import React from 'react'
import { View, Text } from 'react-sketchapp'

import AppTheme from '../../theme/app'
import UITheme from '../../theme/ui'

import UILabel from '../UI/UILabel'

import { generateSymbol } from '../../util/index'
import { ACTIVE_THEME } from '../../theme/ids'

const WrapperStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: '32px',
    paddingTop: '30px'
}

const SeparatorStyle = (themeID) => {
    return {
        backgroundColor: UITheme.color.interface.separator[themeID],
        width: '100%',
        height: '1px',
        position: 'absolute',
        bottom: 0
    }
}

const TypographyItem = ({ name, themeID, styles }) => {
    const styleName = name.split('/')[1]
    const styleVariation = name.split('/')[2]

    return (
        <View name={'wrapper'} style={WrapperStyle}>
            <View name={'wrapper_labels_left'}style={{marginRight: '32px', width: 60}}>
                <UILabel themeId={themeID}>{styles.fontSize.toString()} / {styles.lineHeight.toString()}</UILabel>
            </View>
            <View name={'wrapper_text'}stlye={{position: 'absolute', left: '132px'}}>
                <Text style={styles}>{styleName}</Text>
            </View>
            <View name={'wrapper_labels_right'} style={{position: 'absolute', right: '0'}}>
                <View style={{marginTop: '-4px'}}>
                    <UILabel themeId={themeID} align='right'>{styleVariation}</UILabel>
                    <UILabel themeId={themeID} align='right'>{styles.fontFamily + ' ' + styles.fontWeight}</UILabel>
                </View>
            </View>
            <View name={'separator'} style={SeparatorStyle(themeID)}/>
        </View>
    )
}

export default TypographyItem