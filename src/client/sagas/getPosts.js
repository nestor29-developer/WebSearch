import { put, takeLatest, call } from 'redux-saga/effects';
import { GET_POSTS } from '../actions/types';
import { getPostsSuccess, getPostsError } from '../actions/posts.Action';
import request from 'superagent/lib/client';

function connectToApi() {
  return request
  .get('http://localhost:8080/api/posts')
  .then(res=>{
    return JSON.parse(res.text);
  });
}

export function* getPosts() {
  try {
    const data = yield call(connectToApi);
    yield put(getPostsSuccess(data));
  } catch (error) {
    yield put(getPostsError(error.toString()));
  }
}

export function* watchGetPosts() {
  yield takeLatest(GET_POSTS, getPosts);
}
