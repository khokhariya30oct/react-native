import React ,{useState} from 'react';
import {View,StyleSheet,Button,Text} from 'react-native';
import ColorCounter from '../Components/ColorCounter'

const INCREMENT_VALUE = 5;

const RgbScreen = () => {

    const [red,setRed] = useState(0);
    const [green,setGreen] = useState(0);
    const [blue,setBlue] = useState(0);

    return (
        <View>
            <ColorCounter
                onIncrease = {() => { setRed(red + INCREMENT_VALUE)}}
                onDecrease = { () =>{   setRed(red - INCREMENT_VALUE)}}
                color="Red"
                colorValue = {red} />
            <ColorCounter
                onIncrease = {() => setGreen(green + INCREMENT_VALUE)}
                onDecrease = { () => setGreen(green - INCREMENT_VALUE)}
                color="Green"
                colorValue = {green} />
            <ColorCounter
                onIncrease = {() => setBlue(blue + INCREMENT_VALUE)}
                onDecrease = { () => setBlue(blue - INCREMENT_VALUE)}
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