/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import GradientView from './src/GradientView';
import ActionSheetComponent from './src/ActionSheet';

AppRegistry.registerComponent(appName, () => ActionSheetComponent);
