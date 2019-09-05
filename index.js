/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import NavigationWrapper from './app/navigation/navigation-wrapper';
import App from './App';

AppRegistry.registerComponent(appName, () => NavigationWrapper);
