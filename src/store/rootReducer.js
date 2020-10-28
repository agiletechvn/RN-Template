import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// import user from './user/reducer';

const rootReducer = combineReducers({
  // users: user,
  form: formReducer,
});

export default rootReducer;
