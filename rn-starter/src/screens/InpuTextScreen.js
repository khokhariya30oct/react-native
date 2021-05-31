import React , {useState} from 'react';
import { Text,View,StyleSheet,TextInput } from 'react-native';


const InputTextScreen = () => {

    const [name,setName] = useState('');


    return(
        <View>
            <Text>Enter Your Name </Text>
            <TextInput
            style = {styles.input}
            autoCapitalize = 'none'
            autoCorrect = {true}
            value = {name}
            onChangeText = {(newValue) => setName(newValue)}
            />
            { name.length < 5
                ? <Text>Please Enter Name</Text>
                : <Text>Your name is : {name} </Text>
            }

        </View>
    );
}


const styles = StyleSheet.create({
    input : {
        marginTop : 15,
        borderColor : 'black',
        borderWidth : 1
    }
});


export default InputTextScreen;