import counter from './counter';
import comments from './comments';
import { combineReducers } from 'redux';

const combined = combineReducers({
  comments, counter,
});

export default combined;