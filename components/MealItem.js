import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, } from 'react-native'
import TextBox from './TextBox'

const MealItem = props => {

    const { title, duration, complexity, affordability, imageUrl } = props.itemFullData;

    return (
        <View style={s.mealBox}>
            <TouchableOpacity onPress={props.onSelectMeal} onPress={props.onSelectMeal}>
                <View>
                    <View style={{ ...s.mealRow, ...s.mealHeader }}>
                        <ImageBackground source={{ uri: imageUrl }} style={s.mealImage}>
                            <View style={s.titleContainer}>
                                <TextBox style={s.title} numberOfLines={1}>{title}</TextBox>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ ...s.mealRow, ...s.mealDetail }}>
                        <TextBox>{duration}m</TextBox>
                        <TextBox>{complexity.toUpperCase()}</TextBox>
                        <TextBox>{affordability.toUpperCase()}</TextBox>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}


const s = StyleSheet.create({
    mealBox: {
        backgroundColor: '#f5f5f5',
        width: '100%',
        height: 200,
        alignItems: 'center',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10
        // borderColor: 'red', borderWidth: 1
    },
    mealRow: {
        flexDirection: 'row',

    },
    mealImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    mealHeader: {
        height: '90%',
    },
    mealDetail: {
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '10%',
        // borderColor: 'red', borderWidth: 1,
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingVertical: 2,
        paddingHorizontal: 5,
    },
    title: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    }
});

export default MealItem