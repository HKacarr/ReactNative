/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import StarRatingApp from './src/StarRating';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => StarRatingApp);
