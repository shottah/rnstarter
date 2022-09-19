import React from 'react';
import {Dimensions} from 'react-native';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PersistGate} from 'redux-persist/integration/react';
import {waitUntilSagasFinishLoading} from 'src/redux/saga';
import {persistor, store} from '../redux/store';
import {NavigatorWrapper} from 'src/navigator/NavigatorWrapper';
interface Props {
  appStartedMillis: number;
}

export class App extends React.Component<Props> {
  reactLoadTime: number = Date.now();

  async componentDidMount(): Promise<void> {
    // @todo Catch when app is launched using deep link
  }

  componentWillUnmount(): void {
    // @todo Prepare for the app to be closed
  }

  logAppLoadTime() {
    const {appStartedMillis} = this.props;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const readLoadDuration = (this.reactLoadTime - appStartedMillis) / 1000;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const appLoadDuration = (Date.now() - appStartedMillis) / 1000;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {width, height} = Dimensions.get('window');
    // @todo Track telemetry on app launch
  }

  async handleOpenUrl() {
    await waitUntilSagasFinishLoading();
    // @todo Handle deep link opening
  }

  render() {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            {/* @todo Add App Navigation Wrapper */}
            <NavigatorWrapper />
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    );
  }
}

export default App;
