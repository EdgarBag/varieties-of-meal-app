import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

const MealFlatList = props => {

    const { listData, itemForRender, colums } = props;
    return (
        <View style={s.listBox}>
            <FlatList
                data={listData}
                keyExtractor={(item, index) => item.id}
                renderItem={itemForRender}
                style={{ width: '100%', padding: 5 }}
                numColumns={colums}
            />
        </View>
    )
}

const s = StyleSheet.create({
    listBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealFlatList;
