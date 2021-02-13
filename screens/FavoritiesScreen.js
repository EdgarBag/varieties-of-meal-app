import React from 'react'
import { useSelector } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

// components
import MealFlatList from './../components/MealFlatList'
import MealItem from './../components/MealItem'
import HeaderButton from './../components/HeaderButton'

// import { MEALS } from './../data/dummy-data'
import headerStyle from './../styles/headerStyle'

const FavoritesScreen = props => {

    const favoriteMeals = useSelector(state => state.meals.favoriteMeals)
    const renderFavMealItem = itemData => {
        // const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id);
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
            listData={favoriteMeals}
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