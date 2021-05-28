import React,{ useReducer } from 'react';
import { Text,View,StyleSheet,Button } from 'react-native';

const INCREMENT_VALUE = 1;

const reducer = (state,action) => {
    return {...state,count : state.count + action.payload}
}

const CounterScreen = () => {
    const initialState = {
        count : 0
    }
    const [state,dispatch] = useReducer(reducer,initialState);
    const {count} = state;
    return(
        <View>
           <Text>Counter Demo   </Text>
           <Button title="Increase" onPress = {() => {
               dispatch({payload : INCREMENT_VALUE});
           }} />

           <Button title="Decrease" onPress = { () => {
               dispatch({payload : -1 * INCREMENT_VALUE});
           }} />

           <Text>The Counter : {count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default CounterScreen;