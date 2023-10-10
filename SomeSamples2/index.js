/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import StarRatingApp from './src/StarRating';
import {name as appName} from './app.json';
import ProgressBar from './src/ProgressBar';
import CardInfo from './src/CardInfo';
import AlertComponent from './src/AlertApp/AlertComponent';
import CountdownTimer from './src/CountdownTimer/CountdownTimer';
import ColorPickerComponent from './src/ColorPicker/ColorPickerComponent';
import WheelComponent from './src/Wheel/WheelComponent';
import VideoComponent from './src/Videos/Index';
import YoutubeVideo from './src/Videos/YoutubeVideo';
import CustomFontComponent from './src/CustomFont/CustomFontComponent';
import DrawingCanvasComponent from './src/DrawingCanvas/DrawingCanvasComponent';


AppRegistry.registerComponent(appName, () => DrawingCanvasComponent);
