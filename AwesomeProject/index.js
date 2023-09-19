/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
// import App from './App';
// import TodoApp from './projects/YasamDonguleriTemelBilesenler/TodoApp';
import {name as appName} from './app.json';
// import LifeCycle from './projects/YasamDonguleriTemelBilesenler/LifeCycle';
// import ViewSubject from './projects/YasamDonguleriTemelBilesenler/ViewSubject';
// import TextSubject from './projects/YasamDonguleriTemelBilesenler/TextSubject';
// import ImageSubject from './projects/YasamDonguleriTemelBilesenler/ImageSubject';
// import ScrollViewSafeAreaView from './projects/YasamDonguleriTemelBilesenler/ScrollViewSafeAreaView';
import StackNavigatorSubject from './projects/ReactNavigation/StackNavigatorSubject';

AppRegistry.registerComponent(appName, () => StackNavigatorSubject);
