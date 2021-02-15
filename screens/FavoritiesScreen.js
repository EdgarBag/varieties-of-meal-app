// settings
import React from 'react'
import { useSelector } from 'react-redux'
import { View, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

// components
import FlatListBox from './../components/FlatListBox'
import MealItem from './../components/MealItem'
import HeaderButton from './../components/HeaderButton'
import TextBox from './../components/TextBox'

// utils
import headerStyle from './../styles/headerStyle'

const FavoritesScreen = props => {

    const favoriteMeals = useSelector(state => state.meals.favoriteMeals)
    const renderFavMealItem = itemData => {

        return <MealItem
            itemFullData={itemData.item}
            navigation={props.navigation}

        />
    }

    if (favoriteMeals.length === 0 || !favoriteMeals) {
        return <View style={s.noMealsTittle}>
            <TextBox>
                No Favorite meals found. Start adding some!
            </TextBox>
        </View>
    }

    return (
        <FlatListBox
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

const s = StyleSheet.create({
    noMealsTittle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default FavoritesScreen