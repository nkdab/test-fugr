import { put, takeLatest, all } from 'redux-saga/effects';
import { getData } from '../api';
import { GET_DATA_START, GET_DATA_SUCCESS } from '../constants';
import { getDataSuccess } from '../actions/getDataActions';

function* fetchPersons(searchType) {
  const persons = yield getData(searchType);
  yield put(getDataSuccess(persons));
}

function* actionWatcher() {
  yield takeLatest(GET_DATA_START, fetchPersons);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
