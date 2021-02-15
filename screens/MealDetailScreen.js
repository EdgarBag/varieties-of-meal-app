import React, { useCallback, useEffect, useRef } from 'react'
import { ScrollView, Image, View, StyleSheet, Animated } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

// redux
import { useSelector, useDispatch } from 'react-redux'

// utils
import { toggleFavorite } from '../store/actions/meals'

// componets
import HeaderButton from './../components/HeaderButton'
import TextBox from './../components/TextBox'
import ListItem from './../components/ListItem'


const MealDetailsScreen = props => {
    const meals = useSelector(state => state.meals.meals),
        mealId = props.navigation.getParam('mealId'),
        isCurMealIsFavorite = useSelector(state =>
            state.meals.favoriteMeals.some(meal => meal.id === mealId)),
        selectedMealDetails = meals.find((meal) => meal.id === mealId),
        dispatch = useDispatch();


    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId));
    }, [dispatch, mealId]);

    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(
            fadeAnim, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true
        }
        ).start();
    }, [fadeAnim])
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
        <Animated.View style={{ opacity: fadeAnim }}>

            <View style={s.mealDetails}>
                <TextBox>{selectedMealDetails.duration}m</TextBox>
                <TextBox>{selectedMealDetails.complexity.toUpperCase()}</TextBox>
                <TextBox>{selectedMealDetails.affordability.toUpperCase()}</TextBox>
            </View>
            <TextBox style={s.title}>Ingredients</TextBox>
            {selectedMealDetails.ingredients.map(ingredient => (<ListItem key={ingredient}>{ingredient}</ListItem>))}
            <TextBox style={s.title}>Steps:</TextBox>
            {selectedMealDetails.steps.map(step => (<ListItem key={step}>{step}</ListItem>))}
        </Animated.View>
    </ScrollView>
    )
}

MealDetailsScreen.navigationOptions = navigationData => {
    const mealTitel = navigationData.navigation.getParam('mealTitle'),
        toggleFavorite = navigationData.navigation.getParam('toggleFavor'),
        isFav = navigationData.navigation.getParam('isFav');

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