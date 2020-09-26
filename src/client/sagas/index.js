import { all } from 'redux-saga/effects';
import { watchGetPosts } from './getPosts';
import { watchgetItem } from './getItem';

export default function* rootSaga() {
  yield all([
    watchGetPosts(),
    watchgetItem(),
  ]);
}
