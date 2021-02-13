import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

// components
import HeaderButton from './../components/HeaderButton'
import TextBox from './../components/TextBox'
import SwitchBox from './../components/SwitchBox';

// utils
import headerStyle from './../styles/headerStyle';
import colors from './../utils/colors'

const FiltersScreen = props => {
    const { navigation } = props;
    const [isGlutenFree, setIsGlutenFree] = useState(false),
        [isVegan, setIsVegan] = useState(false),
        [isVegetarian, setIsVegetarian] = useState(false),
        [isLactoseFree, setIsLactoseFree] = useState(false);


    const saveFilters = useCallback(() => {
        const setFilters = {
            glutenFree: isGlutenFree,
            veganFree: isVegan,
            vegetarianFree: isVegetarian,
            lactoseFree: isLactoseFree
        };
        console.log(setFilters, 'set filters');
    }, [isGlutenFree, isVegan, isVegetarian, isLactoseFree])

    useEffect(() => {
        props.navigation.setParams({ save: saveFilters });
    }, [saveFilters])

    return (
        <View style={s.filtersScreen}>
            <TextBox style={s.title}>Available Filters / Restrictions</TextBox>

            <SwitchBox
                switchTitle={'Gluten - Free'}
                switchValue={isGlutenFree}
                switchOnValueChange={newValue => setIsGlutenFree(newValue)} />
            <SwitchBox
                switchTitle={'Vegan - Free'}
                switchValue={isVegan}
                switchOnValueChange={newValue => setIsVegan(newValue)}
            />
            <SwitchBox
                switchTitle={'Vegetarian - Free'}
                switchValue={isVegetarian}
                switchOnValueChange={newValue => setIsVegetarian(newValue)}
            />
            <SwitchBox
                switchTitle={'Lactose - Free'}
                switchValue={isLactoseFree}
                switchOnValueChange={newValue => setIsLactoseFree(newValue)}
            />
        </View>
    )
}

FiltersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Filter Screen',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Menu'
                iconName='ios-menu'
                onPress={() => { navData.navigation.toggleDrawer() }} />
        </HeaderButtons>,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Save'
                iconName='ios-save'
                onPress={navData.navigation.getParam('save')}
            />
        </HeaderButtons>,
        headerTintColor: headerStyle.headerTintColor
    }

}

const s = StyleSheet.create({
    filtersScreen: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%'
    },
    title: {
        fontSize: 20,
        margin: 20,
        textAlign: 'center'
    },
});


export default FiltersScreen