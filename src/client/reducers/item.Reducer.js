import { GET_ITEM_SUCCESS, GET_ITEM, GET_ITEM_ERROR } from '../actions/types';
  
  export const initState = {
    items: [],
    title: '',
    body: '',
    userId: 0,
    isLoading: false,
    nextPostId: 0,
    id: 0,
    error: ''
  };
  
  export default function itemReducer(state = initState, action = {}) {
    switch (action.type) {   
      case GET_ITEM_SUCCESS:
        return {
          ...state,
          ...action.payload,
          isLoading: false,
          error: '',
        };
      case GET_ITEM_ERROR:
        return { ...state, error: action.payload, isLoading: false };
      case GET_ITEM:
            return { ...state, isLoading: true, nextPostId: action.payload };
      default:
        return state;
    }
  }
  