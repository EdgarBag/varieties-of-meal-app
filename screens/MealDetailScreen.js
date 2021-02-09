import React from 'react'
import { View, Text, StyleSheet, Button, Platform } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { MEALS } from './../data/dummy-data'
import HeaderButton from './../components/HeaderButton'

const MealDetailsScreen = props => {

    const mealId = props.navigation.getParam('mealId');
    const selectedMealDetails = MEALS.find((meal) => meal.id === mealId)
    return (
        <View style={s.mealDetailsScreen}>
            <Text>The Meal Details   Screen!!!</Text>
            <Text>{selectedMealDetails.title}</Text>
            <Button title='Go Back to Categories' onPress={() => { props.navigation.popToTop() }} />
        </View>
    )
}

MealDetailsScreen.navigationOptions = navigationData => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    return {
        headerTitle: selectedMeal.title,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title='Favorite'
                iconName='ios-star'
                onPress={() => console.log('mark as favorite on ' + Platform.OS + ' device')} />
            {/* <Item
                title='Favorite'
                iconName='ios-star-outline'
                onPress={() => console.log('OTHER as favorite on ' + Platform.OS + ' device')} /> */}
        </HeaderButtons>


    }
}

const s = StyleSheet.create({
    mealDetailsScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


export default MealDetailsScreen