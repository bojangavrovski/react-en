import { combineReducers } from 'redux';
import { postsHasError, postsIsLoading, posts} from './posts';

const rootReducer = combineReducers({
  postsHasError,
  postsIsLoading,
  posts
});

export default rootReducer;
