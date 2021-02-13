import React from 'react'
import { useSelector } from 'react-redux'


//components
import MealItem from './../components/MealItem'
import MealFlatList from '../components/MealFlatList'

// utils
import colors from './../utils/colors'
import settings from './../data/defaultSettings'
import { CATEGORIES } from './../data/dummy-data'


const CategoryMealScreen = props => {
    const availableMeals = useSelector(state => state.meals.filteredMeals);
    const categoryId = props.navigation.getParam('categoryId') || settings.defaultCategory.id;
    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0)
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals)

    const renderMealItem = itemData => {
        const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id);
        return <MealItem
            itemFullData={itemData.item}
            navigation={props.navigation}
        // onSelectMeal={() => props.navigation.navigate({
        //     routeName: 'MealDetails',
        //     params: {
        //         mealId: itemData.item.id,
        //         mealTitle: itemData.item.title,
        //         isFav: isFavorite
        //     }
        // })}
        />
    }

    return (
        <MealFlatList
            listData={displayedMeals}
            itemForRender={renderMealItem}
        />
    )
}

CategoryMealScreen.navigationOptions = navigationData => {
    const categoryId = navigationData.navigation.getParam('categoryId');
    const selectedCategoryId = CATEGORIES.find(cat => cat.id === categoryId);

    return {
        headerTitle: selectedCategoryId.title,
    }
}


export default CategoryMealScreen