import React from 'react'
import { Platform } from 'react-native'
import { HeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'

//utils
import colors from './../utils/colors'

const CustomHeaderButton = props => {
    return <HeaderButton {...props}
        IconComponent={Ionicons}
        color={Platform.OS === 'android' ? 'white' : colors.primaryColor}
        iconSize={20}
    />
}

export default CustomHeaderButton