import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TextBox = props => {
    return <Text {...props} style={{ ...s.texBox, ...props.style }}>{props.children}</Text>
}


const s = StyleSheet.create({
    texBox: {
        fontFamily: 'caviar_d_bold'
    }
});
export default TextBox

