import React from 'react';
import {View,StyleSheet,Button,Text} from 'react-native';


const ColorCounter = ({color,onIncrease,onDecrease,colorValue}) => {
    return (
        <View>
            <Text>{color} - {colorValue}</Text>
            <Button
                title={`Increase ${color}`}
                onPress = {() => onIncrease()}
            />

            <Button
                title={`Decrease ${color}`}
                onPress = {() => onDecrease()}
            />
        </View>
    )
}


const style = StyleSheet.create({

});

export default ColorCounter;