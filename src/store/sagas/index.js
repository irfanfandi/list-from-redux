import { all, put, takeLatest } from "redux-saga/effects";
import DATA_TEST from "../../DATA";
import { ACTION } from "../actions/constanta";
import { setData } from "../actions/index";

function* getData() {
  try {
    yield put(setData(DATA_TEST));
  } catch (error) {
    console.log(error);
  }
}

function* watchGetdata() {
  yield takeLatest(ACTION.GET_DATA, getData);
}

export default function* rootSaga() {
  yield all([watchGetdata()]);
}
