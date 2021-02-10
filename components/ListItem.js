import React from 'react'
import { View, StyleSheet } from 'react-native';
import TextBox from './TextBox'

const ListItem = props => {
    return (<View style={s.list}>
        <TextBox >{props.children}</TextBox>
    </View>)
}

const s = StyleSheet.create({
    list: {
        borderWidth: 1, borderColor: '#ccc',
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 20
    }
})

export default ListItem;  
