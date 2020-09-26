import { GET_ITEM, GET_ITEM_SUCCESS, GET_ITEM_ERROR } from './types';
export const getItem = (payload = 1) => ({ type: GET_ITEM, payload });
export const getItemSuccess = (payload) => ({ type: GET_ITEM_SUCCESS, payload });
export const getItemError = (payload) => ({ type: GET_ITEM_ERROR, payload });
export default {};
