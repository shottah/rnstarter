import Config from 'react-native-config';
import {stringToBoolean} from './utils/parse';

export const DEV_RESTORE_NAV_STATE_ON_RELOAD = stringToBoolean(
  Config.DEV_RESTORE_NAV_STATE_ON_RELOAD || 'false',
);
