import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import user from './user';
import status from './status';
import blog from './blog';

export default combineReducers({
  user,
  status,
  blog,
  form: reduxFormReducer,
});
