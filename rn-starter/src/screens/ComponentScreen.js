import React from 'react';
import {StyleSheet,Text,View} from 'react-native';


const ComponentScreen = () => {
    const firstName = 'Ashish'


    return (
        <View>
            <Text style={styles.text45}>This is Component Screen</Text>
            <Text style={styles.text20}>My Name is {firstName} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text45 : {
        fontSize : 45
    },
    text20 : {
        fontSize : 20
    }
});

export default ComponentScreen;