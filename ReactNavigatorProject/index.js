/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import BottomTabNavigator from "./components/projects/BottomTabNavigator";
// import DrawerComponent from "./components/projects/DrawerComponent";
// import Route from "./src/screens/Route";
import SendParameterWithNavigation from "./components/projects/SendParameterWithNavigation";

AppRegistry.registerComponent(appName, () => SendParameterWithNavigation);
