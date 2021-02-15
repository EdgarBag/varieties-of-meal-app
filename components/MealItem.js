import React, { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { View, StyleSheet, ImageBackground, TouchableOpacity, Animated } from 'react-native'
import TextBox from './TextBox'

const MealItem = props => {

    const { id, title, duration, complexity, affordability, imageUrl } = props.itemFullData,
        favMeals = useSelector(state => state.meals.favoriteMeals),
        isFavorite = favMeals.some(meal => meal.id === id),
        fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }
        ).start();
    }, [fadeAnim])

    return (
        <View style={s.mealBox}>
            <TouchableOpacity onPress={props.onSelectMeal} onPress={() => props.navigation.navigate({
                routeName: 'MealDetails',
                params: {
                    mealId: id,
                    mealTitle: title,
                    isFav: isFavorite
                }
            })}>
                <Animated.View style={{ opacity: fadeAnim }}>
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
                </Animated.View>
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