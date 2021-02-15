import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { View, StyleSheet } from 'react-native'


//components
import MealItem from './../components/MealItem'
import FlatListBox from './../components/FlatListBox'
import TextBox from '../components/TextBox'

// utils
import colors from './../utils/colors'
import settings from './../data/defaultSettings'


const CategoryMealScreen = props => {
    const availableMeals = useSelector(state => state.meals.filteredMeals),
        categoryId = props.navigation.getParam('categoryId') || settings.defaultCategory.id,
        displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);


    const renderMealItem = itemData => {
        return <MealItem
            itemFullData={itemData.item}
            navigation={props.navigation}
        />
    }

    if (displayedMeals.length === 0) {
        return (<View style={s.content}>
            <TextBox>NO meals found, maybe check your filters!</TextBox>
        </View>)
    }

    return (
        <FlatListBox
            listData={displayedMeals}
            itemForRender={renderMealItem}
        />
    )
}

CategoryMealScreen.navigationOptions = navigationData => {
    const categoryId = navigationData.navigation.getParam('categoryId'),
        categories = navigationData.navigation.getParam('defaultCategories'),
        selectedCategoryId = categories.find(cat => cat.id === categoryId);

    return {
        headerTitle: selectedCategoryId.title,
    }
}

const s = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default CategoryMealScreen