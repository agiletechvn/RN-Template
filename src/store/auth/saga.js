import { all, takeLatest } from 'redux-saga/effects';

function* login({ type, payload }) {}

function* logout({ type, payload }) {}

export default function* authWatchers() {
  yield all([
    yield takeLatest('login', login),
    yield takeLatest('logout', logout),
  ]);
}
