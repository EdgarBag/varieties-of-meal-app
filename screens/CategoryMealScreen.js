import React from 'react'
import { CATEGORIES, MEALS } from './../data/dummy-data'

//components
import MealItem from './../components/MealItem'
import MealFlatList from '../components/MealFlatList'

// utils
import colors from './../utils/colors'
import settings from './../data/defaultSettings'


const CategoryMealScreen = props => {
    const categoryId = props.navigation.getParam('categoryId') || settings.defaultCategory.id;
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0)

    const renderMealItem = itemData => {
        console.log('meal item');
        return <MealItem
            itemFullData={itemData.item}
            onSelectMeal={() => props.navigation.navigate({
                routeName: 'MealDetails',
                params: { mealId: itemData.item.id }
            })}
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