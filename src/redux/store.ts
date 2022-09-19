import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import {Middleware} from 'redux';
import {
  getStoredState,
  PersistConfig,
  persistReducer,
  persistStore,
} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootReducer, {RootState} from 'src/redux/reducers';
import {rootSaga} from 'src/redux/saga';

const TAG = 'redux/store';

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage: AsyncStorage,
};

// We used to use AsyncStorage to save the state, but moved to file system storage because of problems with Android
// maximum size limits. To keep backwards compatibility, we first try to read from the file system but if nothing is found
// it means it's an old version so we read the state from AsyncStorage.
// @ts-ignore
persistConfig.getStoredState = async (config: any) => {
  try {
    // throw new Error("testing exception in getStoredState")
    const state = await getStoredState(config);
    if (state) {
      return state;
    }

    const oldState = await getStoredState({
      ...config,
      storage: AsyncStorage,
      keyPrefix: 'persist:',
    });
    if (oldState) {
      return oldState;
    }

    return null;
  } catch (error: any) {
    console.error('redux/store', 'Failed to retrieve redux state.', error);
  }
};

// For testing only!
export const _persistConfig = persistConfig;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare var window: any;

export const setupStore = (initialState = {}, config = persistConfig) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares: Middleware[] = [sagaMiddleware];

  const persistedReducer = persistReducer(config, rootReducer);

  const createdStore = configureStore({
    reducer: persistedReducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware: any) =>
      getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      }).concat(...middlewares),
  });
  const createdPersistor = persistStore(createdStore);
  sagaMiddleware.run(rootSaga);

  return {store: createdStore, persistor: createdPersistor};
};

const {store, persistor} = setupStore();
setupListeners(store.dispatch);
export {store, persistor};
