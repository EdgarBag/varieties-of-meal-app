import React from 'react'
import { ScrollView, Image, View, Text, StyleSheet, Button, Platform } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { MEALS } from './../data/dummy-data'

// componets
import HeaderButton from './../components/HeaderButton'
import TextBox from './../components/TextBox'
import ListItem from './../components/ListItem'
import { List } from 'react-native-paper'



const MealDetailsScreen = props => {

    const mealId = props.navigation.getParam('mealId');
    const selectedMealDetails = MEALS.find((meal) => meal.id === mealId)
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