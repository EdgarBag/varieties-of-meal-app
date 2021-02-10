import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

// components
import MealFlatList from './../components/MealFlatList'
import MealItem from './../components/MealItem'
import HeaderButton from './../components/HeaderButton'

import { MEALS } from './../data/dummy-data'
import headerStyle from './../styles/headerStyle'

const FavoritesScreen = props => {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')

    const renderFavMealItem = itemData => {
        return <MealItem
            itemFullData={itemData.item}
        />
    }

    return (
        <MealFlatList
            listData={favMeals}
            itemForRender={renderFavMealItem}
        />
    )
}

FavoritesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Favorites',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Menu'
                iconName='ios-menu'
                onPress={() => { navData.navigation.toggleDrawer() }} />
        </HeaderButtons>,
        headerTintColor: headerStyle.headerTintColor
    }
}


export default FavoritesScreen