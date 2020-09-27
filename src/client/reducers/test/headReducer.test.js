import headReducer, { initState } from '../head.Reducer';
import { TOGGLE_SEARCH, TOGGLE_SEARCH_INPUT, UPDATE_SEARCH_INPUT_TEXT } from '../../actions/types';

describe('Head Reducer', () => {
  it('Should be able to handle an initial state', () => {
    expect(headReducer()).toEqual(initState);
  });
  it('Should handle TOGGLE_SEARCH_INPUT', () => {
    expect(headReducer(initState, {
      type: TOGGLE_SEARCH_INPUT,
      payload: { isSearchInputShown: false },
    })).toEqual({ ...initState,
      isSearchInputShown: false,
    });
  });
  it('Should handle TOGGLE_SEARCH', () => {
    expect(headReducer(initState, {
      type: TOGGLE_SEARCH,
      payload: { isSearchShown: true },
    })).toEqual({
      ...initState,
      isSearchShown: true,
    });
  }); 
  it('Should handle UPDATE_SEARCH_INPUT_TEXT', () => {
    expect(headReducer(initState, {
      type: UPDATE_SEARCH_INPUT_TEXT,
      payload: { searchInputText: 'Whatever Text' },
    })).toEqual({
      ...initState,
      searchInputText: 'Whatever Text',
    });
  });
});
