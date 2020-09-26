import environment from '../../server/environment';

import { TOGGLE_SEARCH_INPUT, TOGGLE_SEARCH, UPDATE_SEARCH_INPUT_TEXT } from '../actions/types';
  

export const initState = {
    title: environment.Title,
    isSearchInputShown: false,
    isSearchShown: true,    
    searchInputText: '',
};
  
export default function headReducer(state = initState, action = {}) {
    switch (action.type) {
      case TOGGLE_SEARCH_INPUT:
        return {
          ...state,
          isSearchInputShown: action.payload.isSearchInputShown,
        };
      case UPDATE_SEARCH_INPUT_TEXT:
        return {
          ...state,
          searchInputText: action.payload.searchInputText,
        };
      case TOGGLE_SEARCH:
        return {
          ...state,
          isSearchShown: action.payload.isSearchShown,
        };    
      default:
        return state;
    }
}
  