import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

// components
import CategoryGridTile from './../components/CategoryGridTile'
import HeaderButton from './../components/HeaderButton'
import MealFlatList from '../components/MealFlatList'


// utils
import headerStyle from './../styles/headerStyle'
import { CATEGORIES } from './../data/dummy-data'
import settings from './../data/defaultSettings'


const CategoriesScreen = props => {
    const renderGridItem = itemData => {

        return (
            <CategoryGridTile item={itemData.item}
                onSelect={() =>
                    props.navigation.navigate({
                        routeName: 'CategoryMeals', params: {
                            categoryId: itemData.item.id
                        }
                    })}
            />
        )
    }
    return (
        <MealFlatList
            listData={CATEGORIES || settings.defaultCategory}
            itemForRender={renderGridItem}
            colums={2}
        />
    )
}

CategoriesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Meal Categories',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Menu'
                iconName='ios-menu'
                onPress={() => { navData.navigation.toggleDrawer() }} />
        </HeaderButtons>,
        headerTintColor: headerStyle.headerTintColor
    }
}


export default CategoriesScreen