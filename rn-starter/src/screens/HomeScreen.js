import React from "react";
import { Text, StyleSheet, View ,Button,TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hey There ! Welcome to learning app session</Text>
      <Button
        onPress={() => navigation.navigate("Component")}
        title="Go to Components" />

      <Button
      onPress={() => navigation.navigate("ListScreen")}
      title="Go to List" />

      <Button
      onPress={() => navigation.navigate("ImageScreen")}
      title="Go to ImageScreen" />

      <Button
      onPress={() => navigation.navigate("CounterScreen")}
      title="Go to Counter Demo"/>

      <Button
      onPress={() => navigation.navigate("ColorScreen")}
      title="Go to Color Demo"/>

      <Button
      onPress={() => navigation.navigate("RgbScreen")}
      title="Go to RGB Color mixure screen"/>

      {/* <TouchableOpacity
        style = {styles.verticalMargin}
        onPress={() => navigation.navigate("ListScreen")}>
        <Text>Go to List screen Component</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  verticalMargin: {
    marginVertical: 20
  }
});

export default HomeScreen;
