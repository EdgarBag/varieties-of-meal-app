//settings
import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector } from 'react-redux'

// components
import CategoryGridTile from './../components/CategoryGridTile'
import HeaderButton from './../components/HeaderButton'
import FlatListBox from './../components/FlatListBox'

// utils
import headerStyle from './../styles/headerStyle'
import settings from './../data/defaultSettings'


const CategoriesScreen = props => {
    const categories = useSelector(state => state.meals.categories);

    const renderGridItem = itemData => {
        return (
            <CategoryGridTile item={itemData.item}
                onSelect={() =>
                    props.navigation.navigate({
                        routeName: 'CategoryMeals', params: {
                            categoryId: itemData.item.id,
                            defaultCategories: categories
                        }
                    })}
            />
        )
    }
    return (
        <FlatListBox
            listData={categories || settings.defaultCategory}
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