import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import RgbScreen from './src/screens/RgbScreen';
import InputTextScreen from './src/screens/InpuTextScreen';
import BoxScreen from './src/screens/BoxScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component : ComponentScreen,
    ListScreen : ListScreen,
    ImageScreen :ImageScreen,
    CounterScreen : CounterScreen,
    ColorScreen : ColorScreen,
    RgbScreen : RgbScreen,
    InputTextScreen :InputTextScreen,
    BoxScreen : BoxScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Learning App",
    },
  }
);

export default createAppContainer(navigator);
