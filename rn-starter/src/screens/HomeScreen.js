import React from "react";
import { Text, StyleSheet, View ,Button,TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {

  this.navigateScreen = (screenName) => {
    navigation.navigate(screenName);
  }

  return (
    <View>
      <Text style={styles.text}>Hey There ! Welcome to learning app session</Text>
      <Button
        onPress={() => navigateScreen("Component")}
        title="Go to Components" />

      <Button
      onPress={() => navigateScreen("ListScreen")}
      title="Go to List" />

      <Button
      onPress={() => navigateScreen("ImageScreen")}
      title="Go to ImageScreen" />
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
