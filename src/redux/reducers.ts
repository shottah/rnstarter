import {Action, combineReducers} from 'redux';
import {PersistState} from 'redux-persist';
import {reducer as app, State as AppState} from 'src/app/reducers';

export interface RootState {
  _persist: PersistState;
  app: AppState;
}

export interface PersistedRootState {
  _persist: PersistState;
  app: AppState;
}

const appReducer = combineReducers({
  app: app,
}) as (state: RootState | undefined, action: Action) => RootState;

const rootReducer = (
  state: RootState | undefined,
  action: Action,
): RootState => {
  if (false) {
    const initialState = appReducer(undefined, action);
    return {
      ...initialState,
    };
  }
  return appReducer(state, action);
};

export default rootReducer;
