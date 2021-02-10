import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer, } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { creatDrawerNavigator, createDrawerNavigator } from 'react-navigation-drawer'

// screens
import CategoriesScreen from './../screens/CategoriesScreen'
import CategoryMealScreen from '../screens/CategoryMealScreen'
import MealDetailsScreen from '../screens/MealDetailScreen'
import FavoritesScreen from './../screens/FavoritiesScreen'
import FiltersScreen from '../screens/FiltersScreen'

import headerStyle from './../styles/headerStyle'
import { Platform, View } from 'react-native';
import React from 'react'
import colors from '../utils/colors';
import { Ionicons } from '@expo/vector-icons'
import TextBox from '../components/TextBox';



const defaultStackNavOptions = {
    headerStyle: headerStyle.headerStyle,
    headerTintColor: headerStyle.headerTintColor,
    headerTitle: 'a Screen Default',
    headerTitleStyle: {
        fontFamily: 'caviar_d_bold'
    },
    // headerBackTitleStyle: { fontFamily: 'caviar_d_bold' }

}

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: { headerTitle: 'Meal Categories' }
    },
    CategoryMeals: CategoryMealScreen,
    MealDetails: MealDetailsScreen,
},
    {
        defaultNavigationOptions: defaultStackNavOptions,
        // initialRouteName: 'CategoryMeals'

    }
);

const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetails: MealDetailsScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions,
})

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen

})

const TabScreenConfig = {
    Meals: {
        screen: MealsNavigator, navigationOptions: {
            tabBarIcon: (tablInfo) => {
                return <Ionicons name='ios-restaurant'
                    size={25}
                    color={tablInfo.tintColor} />
            },
            tabBarColor: colors.primaryColor,
        }
    },
    Favorites: {
        screen: FavNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star'
                    size={25}
                    color={tabInfo.tintColor}
                />
            },
            tabBarColor: colors.leettersColor,
            backgroundColor: 'red'
        },
    },
};


const MealsFavoriteTabNavigator =
    Platform.OS === 'android'
        ? createMaterialBottomTabNavigator(TabScreenConfig, {
            activeTintColor: colors.primaryColor,
            shifting: true //tab icons made bigger
        })
        : createBottomTabNavigator(TabScreenConfig
            , {
                tabBarOptions: {
                    activeTintColor: colors.primaryColor
                }
            })



const MainNavigator = createDrawerNavigator({
    MealsFavs: {
        screen: MealsFavoriteTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filters: FiltersNavigator,
}, {
    contentOptions: {
        activeTintColor: colors.primaryColor,
        labelStyle: {
            fontFamily: 'caviar_d_italic'
        }
    }
})

export default createAppContainer(MainNavigator)