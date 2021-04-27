/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src';

import Navigator from '_navigations';

const App = () => <Navigator />;

AppRegistry.registerComponent(appName, () => App);
