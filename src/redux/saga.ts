import {AnyAction} from 'redux';
import {spawn, takeEvery} from 'redux-saga/effects';
import {sleep} from 'src/utils/time';

let sagasFinishedLoading = false;

export const waitUntilSagasFinishLoading = async () => {
  while (!sagasFinishedLoading) {
    await sleep(1000);
  }
};

function* loggerSaga() {
  yield takeEvery('*', (action: AnyAction) => {
    try {
      console.debug('redux/saga@logger', JSON.stringify(action));
    } catch (err) {
      console.warn(
        'redux/saga@logger',
        'could not log action of type',
        action.type,
      );
    }
  });
}

export function* rootSaga() {
  try {
    // @todo Hook up submodule sagas
    yield spawn(loggerSaga);
  } catch (error: any) {
    console.error('redux/saga', JSON.stringify(error));
  } finally {
    sagasFinishedLoading = true;
  }
}
