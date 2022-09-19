import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StackParamList} from './types';
import {Screens} from './screens';
import Home from 'src/home/Home';
import {AppLoading} from 'src/app/AppLoading';
import {emptyHeader, noHeader} from './Headers';
import {ExtractProps} from 'src/utils/typescript';

const Stack = createStackNavigator<StackParamList>();
const RootStack = createStackNavigator<StackParamList>();

type InitialRouteName = ExtractProps<
  typeof Stack.Navigator
>['initialRouteName'];

function MainStackScreen() {
  const [initialRouteName, setInitialRoute] =
    React.useState<InitialRouteName>(undefined);

  useEffect(() => {
    const initialRoute = Screens.Home;
    setInitialRoute(initialRoute);
  }, []);

  if (!initialRouteName) {
    return <AppLoading />;
  }

  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      <Stack.Screen name={Screens.Home} component={Home} />
    </Stack.Navigator>
  );
}

function RootStateScreen() {
  return (
    <RootStack.Navigator screenOptions={emptyHeader}>
      <RootStack.Screen
        name={Screens.Main}
        component={MainStackScreen}
        options={noHeader}
      />
    </RootStack.Navigator>
  );
}

export default RootStateScreen;
