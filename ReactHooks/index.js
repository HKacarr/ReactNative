/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import IncDecApp from './src/components/IncDecApp/Index';
import GetDataApp from './src/components/GetDatasApp/Index';
import HookApp from './src/components/HookApp/Index';
import FlipCard from './src/components/FlipCard/FlipCard';
import ImagesApp from './src/components/ImageApp/ImagesApp';

AppRegistry.registerComponent(appName, () => ImagesApp);
