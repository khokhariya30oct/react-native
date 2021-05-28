import React ,{useReducer, useState} from 'react';
import {View,StyleSheet,Button,Text} from 'react-native';
import ColorCounter from '../Components/ColorCounter'

const INCREMENT_VALUE = 5;

const reducer = (state,action) => {
    switch(action.type) {
        case 'red':
            return {...state,red : state.red + action.payload};
        case 'green':
            return {...state,green : state.green + action.payload};
        case 'blue':
            return {...state,blue : state.blue + action.payload};
        default:
            return state;
    }

}

const RgbScreen = () => {

    const initialState = {
        red : 0,
        green: 0,
        blue: 0
    }

    const [state,dispatch] = useReducer(reducer,initialState)
    const {red,green,blue} = state;
    return (
        <View>
            <ColorCounter
                onIncrease = {() =>  dispatch({type : 'red', payload : INCREMENT_VALUE})}
                onDecrease = { () => dispatch({type : 'red', payload : -1 * INCREMENT_VALUE})}
                color="Red"
                colorValue = {red} />
            <ColorCounter
                onIncrease = {() => dispatch({type : 'green', payload : INCREMENT_VALUE})}
                onDecrease = { () => dispatch({type : 'green', payload : -1 * INCREMENT_VALUE})}
                color="Green"
                colorValue = {green} />
            <ColorCounter
                onIncrease = {() => dispatch({type : 'blue', payload : INCREMENT_VALUE})}
                onDecrease = { () => dispatch({type : 'blue', payload : -1 * INCREMENT_VALUE})}
                color="Blue"
                colorValue = {blue}
                />

            <View style = {{width : 100,height : 100, backgroundColor : `rgb(${red},${green},${blue})`}} />
        </View>
    )
}


const style = StyleSheet.create({

});

export default RgbScreen;