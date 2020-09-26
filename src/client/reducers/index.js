import { combineReducers } from 'redux';
import postsReducers from './posts.Reducer';
import editMenuFormReducer from './editMenuForm.Reducer';
import itemReducer from './item.Reducer';
import headReducer from './head.Reducer';

const rootReducer = combineReducers({
  header: headReducer,
  posts: postsReducers,
  editForm: editMenuFormReducer,
  item: itemReducer,
});

export default rootReducer;
