import { all } from 'redux-saga/effects';
import authWatchers from './auth/saga';

export default function* rootSaga() {
  yield all([
    // for watcher
    authWatchers(),
  ]);
}
