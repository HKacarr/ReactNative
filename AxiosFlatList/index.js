/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ScrollRefresh from "./projects/ScrollRefresh";

AppRegistry.registerComponent(appName, () => ScrollRefresh);
