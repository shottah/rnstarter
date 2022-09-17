import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {waitUntilSagasFinishLoading} from 'src/redux/saga';
import {persistor, store} from '../redux/store';
import {variable} from 'src/redux/store';
interface Props {
  appStartedMillis: number;
}

export class App extends React.Component<Props> {
  reactLoadTime: number = Date.now();

  async componentDidMount(): Promise<void> {
    // @todo Catch when app is launched using deep link
    console.log(variable);
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
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <View>
            <Text>APP ROOT</Text>
          </View>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
