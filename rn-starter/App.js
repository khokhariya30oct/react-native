import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component : ComponentScreen,
    ListScreen : ListScreen,
    ImageScreen :ImageScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Learning App",
    },
  }
);

export default createAppContainer(navigator);