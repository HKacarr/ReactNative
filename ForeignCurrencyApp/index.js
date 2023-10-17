/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import switchCurrency from './components/SwitchCurrency';
import SwitchCurrency from './components/SwitchCurrency';

AppRegistry.registerComponent(appName, () => SwitchCurrency);
