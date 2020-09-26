import { GET_POSTS_SUCCESS, UPDATE_POST, GET_POSTS, UPDATE_PAGE_NUMBER, GET_POSTS_ERROR } from './types';
export const getPostsSuccess = (payload) => ({ type: GET_POSTS_SUCCESS, payload });
export const getPosts = () => ({ type: GET_POSTS });
export const updatePost = (payload) => ({ type: UPDATE_POST, payload });
export const updatePageNumber = (payload) => ({ type: UPDATE_PAGE_NUMBER, payload });
export const getPostsError = (payload) => ({ type: GET_POSTS_ERROR, payload });
export default {};
  