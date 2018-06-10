import React from 'react'
import { Text } from 'react-sketchapp'

import color from '../../../theme/ui/color'
import { fontFamily } from '../../../theme/ui/typography'

const UILabel = ({ children, themeId, align = 'left', secondary = false }) => {
    const styles = {
        textAlign: align,
        color: color.text.hint[themeId],
        opacity: secondary ? 0.7 : 1,
        fontFamily: fontFamily,
        lineHeight: 20 ,
        letterSpacing: 0.2
    }

    return (
        <Text style={styles}>{children}</Text>
    )
}

export default UILabel