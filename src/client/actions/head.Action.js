import { TOGGLE_SEARCH_INPUT, UPDATE_SEARCH_INPUT_TEXT, TOGGLE_SEARCH } from './types';
export const toggleSearchInput = (payload) => ({ type: TOGGLE_SEARCH_INPUT, payload });
export const toggleSearch = (payload) => ({ type: TOGGLE_SEARCH, payload });
export const updateSearchInputText = (payload) => ({ type: UPDATE_SEARCH_INPUT_TEXT, payload });
  