import React, { useCallback, useEffect } from 'react'
import { ScrollView, Image, View, Text, StyleSheet, Button, Platform } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { MEALS } from './../data/dummy-data'

import { useSelector, useDispatch } from 'react-redux'
import { toggleFavorite } from '../store/actions/meals'

// componets
import HeaderButton from './../components/HeaderButton'
import TextBox from './../components/TextBox'
import ListItem from './../components/ListItem'


const MealDetailsScreen = props => {
    const meals = useSelector(state => state.meals.meals)
    const mealId = props.navigation.getParam('mealId');
    const isCurMealIsFavorite = useSelector(state =>
        state.meals.favoriteMeals.some(meal => meal.id === mealId));
    const selectedMealDetails = meals.find((meal) => meal.id === mealId)

    const dispatch = useDispatch();
    // console.log(isCurMealIsFavorite, ' &&&&&&&&&&&&&& ');

    const toggleFavoriteHandler = useCallback(() => {

        dispatch(toggleFavorite(mealId));
    }, [dispatch, mealId])

    useEffect(() => {
        props.navigation.setParams({ toggleFavor: toggleFavoriteHandler })
    }, [toggleFavoriteHandler])

    useEffect(() => {
        props.navigation.setParams({ isFav: isCurMealIsFavorite })
    }, [isCurMealIsFavorite])

    return (<ScrollView>
        <Image
            source={{ uri: selectedMealDetails.imageUrl }}
            style={s.image}
        />
        <View style={s.mealDetails}>
            <TextBox>{selectedMealDetails.duration}m</TextBox>
            <TextBox>{selectedMealDetails.complexity.toUpperCase()}</TextBox>
            <TextBox>{selectedMealDetails.affordability.toUpperCase()}</TextBox>
            {/* <Button title='Go Back to Categories' onPress={() => { props.navigation.popToTop() }} /> */}
        </View>
        <TextBox style={s.title}>Ingredients</TextBox>
        {selectedMealDetails.ingredients.map(ingredient => (<ListItem key={ingredient}>{ingredient}</ListItem>))}
        <TextBox style={s.title}>Steps:</TextBox>
        {selectedMealDetails.steps.map(step => (<ListItem key={step}>{step}</ListItem>))}
    </ScrollView>
    )
}

MealDetailsScreen.navigationOptions = navigationData => {
    // const mealId = navigationData.navigation.getParam('mealId');
    const mealTitel = navigationData.navigation.getParam('mealTitle')
    const toggleFavorite = navigationData.navigation.getParam('toggleFavor')
    const isFav = navigationData.navigation.getParam('isFav')
    console.log(isFav, 'is fav one');
    return {
        headerTitle: mealTitel,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title='Favorite'
                iconName={isFav ? 'ios-star' : 'ios-star-outline'}
                onPress={toggleFavorite} />
        </HeaderButtons>
    }
}

const s = StyleSheet.create({
    mealDetails: {
        flex: 1,
        justifyContent: 'space-between',
        // alignItems: 'center',
        padding: 10,
        flexDirection: 'row'
    },
    image: {
        width: '100%',
        height: 200,
        paddingVertical: 10
    },
    title: {
        fontSize: 20,
        textAlign: 'center'

    }
});


export default MealDetailsScreen