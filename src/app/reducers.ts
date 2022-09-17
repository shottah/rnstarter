import {AppState} from 'src/app/types';
import {
  getRehydratePayload,
  REHYDRATE,
  RehydrateAction,
} from 'src/redux/persist-helper';
import {Actions, ActionTypes} from 'src/app/actions';

export interface State {
  locked: boolean;
  requirePinOnAppOpen: boolean;
  minVersion: string | null;
  appState: AppState;
}

const initialState = {
  locked: false,
  minVersion: null,
  appState: AppState.Active,
  requirePinOnAppOpen: false,
};

export const reducer = (
  state: State | undefined = initialState,
  action: ActionTypes | RehydrateAction,
): State => {
  switch (action.type) {
    case REHYDRATE: {
      const rehydratePayload = getRehydratePayload(action, 'app');
      return {
        ...state,
        ...rehydratePayload,
        appState: initialState.appState,
        locked: rehydratePayload.requirePinOnAppOpen ?? initialState.locked,
      };
    }
    case Actions.SET_APP_STATE: {
      return {
        ...state,
        appState: action.state as AppState,
      };
    }
    default:
      return {...state};
  }
};
