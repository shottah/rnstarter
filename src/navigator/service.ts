import {createNavigationContainerRef} from '@react-navigation/native';
import {StackParamList} from './types';

export const navigationRef = createNavigationContainerRef();

export const navigate = <RouteName extends keyof StackParamList>(
  ...args: undefined extends StackParamList[RouteName]
    ? [RouteName] | [RouteName, StackParamList[RouteName]]
    : [RouteName, StackParamList[RouteName]]
) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(args);
  }
};
