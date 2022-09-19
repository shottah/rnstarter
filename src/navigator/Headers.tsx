import {StackNavigationOptions} from '@react-navigation/stack';

export const noHeader: StackNavigationOptions = {
  headerShown: false,
};

export const emptyHeader: StackNavigationOptions = {
  headerTitle: ' ',
  headerShown: true,
  headerTitleAlign: 'center',
};
