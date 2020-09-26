import { SHOW_DIALOG, HIDE_DIALOG, EDIT_POST } from '../actions/types';

export const initState = {
  title: '',
  body: '',
  isOpen: false,
  id: 0,  
};

export default function editFormMenuReducer(state = initState, action = {}) {
  switch (action.type) {
    case EDIT_POST:
        return {
          ...state,
          ...action.payload,
          isOpen: true,
        };
    case SHOW_DIALOG:
      return {
        ...state,
        isOpen: true,
      };
    case HIDE_DIALOG:
      return {
        ...state,
        isOpen: false,
        id: 0,
        title: '',
        body: '',
      };   
    default:
      return state;
  }
}
