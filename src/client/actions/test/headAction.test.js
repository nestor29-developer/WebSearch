import { toggleSearch, toggleSearchInput, updateSearchInputText } from '../head.Action';
import { TOGGLE_SEARCH, TOGGLE_SEARCH_INPUT, UPDATE_SEARCH_INPUT_TEXT } from '../types';

const MOCK_INPUT = 'Hey!';
describe('Head Actions', () => {
  it('toggleSearch should dispatch TOGGLE_SEARCH action with a boolean', () => {
    expect(toggleSearch(true)).toEqual({
      type: TOGGLE_SEARCH,
      payload: true,
    });
  });
  it('editDialog should update dialog form some values', () => {
    expect(updateSearchInputText(MOCK_INPUT)).toEqual({
      type: UPDATE_SEARCH_INPUT_TEXT,
      payload: MOCK_INPUT,
    });
  });
  it('showDialog should dispatch HIDE_DIALOG action', () => {
    expect(toggleSearchInput(true)).toEqual({
      type: TOGGLE_SEARCH_INPUT,
      payload: true,
    });
  });
});
