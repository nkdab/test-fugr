import { put, takeLatest, all } from 'redux-saga/effects';
import { getData } from '../api';
import { GET_DATA_START } from '../constants';
import { getDataSuccess } from '../actions/getDataActions';

function* fetchPersons() {
  const persons = yield getData('small');
  yield put(getDataSuccess(persons));
}

function* actionWatcher() {
  yield takeLatest(GET_DATA_START, fetchPersons);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
