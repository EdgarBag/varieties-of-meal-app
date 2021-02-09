import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from './../components/HeaderButton'

import headerStyle from './../styles/headerStyle';

const FiltersScreen = () => {
    return (
        <View style={s.diltersScreen}>
            <Text>The Filters   Screen!!!</Text>
        </View>
    )
}

FiltersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Filter Screen',
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Menu'
                iconName='ios-menu'
                onPress={() => { navData.navigation.toggleDrawer() }} />
        </HeaderButtons>,
        headerTintColor: headerStyle.headerTintColor
    }

}

const s = StyleSheet.create({
    favoritiesScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


export default FiltersScreen