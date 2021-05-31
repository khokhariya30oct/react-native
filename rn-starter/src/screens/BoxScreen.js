import React from 'react';
import {Text,View,StyleSheet} from 'react-native';


const BoxScreen = () => {
    return (
        <View style = {styles.viewStyle}>
            <Text style = {styles.textStyle}>This is Box content</Text>
            <Text style = {styles.textStyle}>This is Box content</Text>
            <Text style = {styles.textStyle}>This is Box content</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle : {
        borderColor : 'black',
        borderWidth : 1,
        height : 500,
        justifyContent : 'space-around'

    },
    textStyle : {
        borderWidth : 1,
        borderColor : 'red',
        marginVertical : 10
    }


});


export default BoxScreen;