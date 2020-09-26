import { GET_ITEM } from '../actions/types';
import { put, takeLatest, call, select } from 'redux-saga/effects';
import { getItemSuccess, getItemError } from '../actions/item.Action';
import request from 'superagent/lib/client';

function connectToApiById(id) {
  return request
  .get(`http://localhost:8080/api/posts/${id}`)
  .then(res=>{
    console.log('databyid: ', JSON.parse(res.text));
    return JSON.parse(res.text);
  });
}

export function* getItem(postId) {
  console.log('value', postId.payload);
  try {
    const data = yield call(connectToApiById,postId.payload);
    yield put(getItemSuccess(data));
  } catch (error) {
    yield put(getItemError(error.toString()));
  }
}

export function* watchgetItem() {
  yield takeLatest(GET_ITEM, getItem);
}
