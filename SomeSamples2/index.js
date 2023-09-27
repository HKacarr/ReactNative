/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import StarRatingApp from './src/StarRating';
import {name as appName} from './app.json';
import ProgressBar from './src/ProgressBar';
import CardInfo from './src/CardInfo';

AppRegistry.registerComponent(appName, () => CardInfo);
