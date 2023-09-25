/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import GradientView from './src/GradientView';
import ActionSheetComponent from './src/ActionSheet';
import InternetConnection from './src/InternetConnection';
import ImageGallery from './src/ImageGallery';
import Slider from './src/Slider';
import SelectBox from './src/SelectBox';
import SharedButton from './src/SharedButton';


AppRegistry.registerComponent(appName, () => SharedButton);
