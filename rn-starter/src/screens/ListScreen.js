import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {

    const friendList = [
        { name: 'f1', age: 22 },
        { name: 'f2', age: 23 },
        { name: 'f3', age: 24 },
        { name: 'f4', age: 25 },
        { name: 'f5', age: 26 },
    ]

    return (
        <FlatList
            keyExtractor={friendList => friendList.name}
            data={friendList}
            renderItem={({ item }) => {
                return <Text style={styles.verticalMargin}>{item.name} - Age is {item.age}</Text>
            }}
        />
    )
};


const styles = StyleSheet.create({
    verticalMargin: {
        marginVertical: 10
    }
});


export default ListScreen;