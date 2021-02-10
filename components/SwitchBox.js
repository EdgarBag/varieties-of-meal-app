import React from 'react'
import { View, Switch, StyleSheet } from 'react-native'


import TextBox from './TextBox'
import colors from './../utils/colors'

const SwitchBox = props => {
    const { switchTitle, switchValue, switchOnValueChange } = props;

    return (
        <View style={s.filterContainer}>
            <TextBox>{switchTitle}</TextBox>
            <Switch
                trackColor={{ true: colors.primaryColor, false: '' }}
                thumbColor={colors.leettersColor}
                value={switchValue}
                onValueChange={switchOnValueChange}
            />

        </View>
    )
}


const s = StyleSheet.create({
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 10
    },
});

export default SwitchBox