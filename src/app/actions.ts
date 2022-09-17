import {AppState} from './types';

export enum Actions {
  SET_APP_STATE = 'APP/SET_APP_STATE',
}

export interface SetAppState {
  type: Actions.SET_APP_STATE;
  state: string;
}

export const setAppState = (state: AppState) => ({
  type: Actions.SET_APP_STATE,
  state,
});

export type ActionTypes = SetAppState;
