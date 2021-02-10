import React from 'react'
import { View, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';

//componens
import TextBox from './TextBox'

const CategoryGridTile = props => {

    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <View style={s.gridItem}>
            <TouchableCmp
                onPress={props.onSelect}
                style={{ flex: 1 }}>
                <View style={{ ...s.gridContainer, backgroundColor: props.item.color }}>
                    <TextBox style={s.gridTitle} numberOfLines={2}>{props.item.title}</TextBox>
                </View>
            </TouchableCmp >
        </View>
    )
}

const s = StyleSheet.create({
    gridContainer: {
        flex: 1,
        borderRadius: 20,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',


    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        elevation: 5,// for android,
    },
    gridTitle: {
        fontSize: 20,
        textAlign: 'right'
    }
    
})
export default CategoryGridTile