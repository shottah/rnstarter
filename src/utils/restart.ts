import {Platform} from 'react-native';
import RNExitApp from 'react-native-exit-app';
import {RestartAndroid} from 'react-native-restart-android';

export const restartApp = () => {
  if (Platform.OS === 'android') {
    RestartAndroid.restart();
  } else {
    RNExitApp.exitApp();
  }
};
