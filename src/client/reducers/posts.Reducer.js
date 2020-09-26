import { GET_POSTS_SUCCESS, GET_POSTS_ERROR, GET_POSTS, UPDATE_POST, UPDATE_PAGE_NUMBER } from '../actions/types';
  
  export const initState = { items: [], error: '', isLoading: false, pageNumber: 1 };
  
  export default function postReducer(state = initState, action = {}) {
    switch (action.type) {    
      case GET_POSTS_SUCCESS:
        return {
          ...state,
          items: action.payload,
          isLoading: false,
          error: '',
        };
      case GET_POSTS_ERROR:
        return { ...state, error: action.payload, isLoading: false };
      case GET_POSTS:
        return { ...state, isLoading: true };
      case UPDATE_POST:
        return {
          ...state,
          items: state.items.map((item) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                ...action.payload,
              };
            }
            return item;
          }),
        };
      case UPDATE_PAGE_NUMBER:
        return { ...state, pageNumber: action.payload };
      default:
        return state;
    }
  }
  