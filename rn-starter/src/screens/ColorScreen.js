import React , {useState} from 'react';
import { Text,View,StyleSheet,Button,FlatList } from 'react-native';

const ColorScreen = () => {

    const [color,setColors] = useState([]);

    return (
        <View>
            <Button title="Add Color"
                onPress = {() => {
                    setColors([...color,generateRandom()])
                }}
            ></Button>
            <FlatList
                data = {color}
                keyExtractor = {(item) => item}
                renderItem = {({item}) => {
                    return (
                        <View style = {{ width : 50, height : 50 , backgroundColor : item}} />
                    );
                }}
            />

        </View>
    );
};

const generateRandom = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
}


const styles = StyleSheet.create({
    width : {
        width : 50
    },
    height : {
        height : 50
    }
});


export default ColorScreen;