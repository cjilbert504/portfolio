import { combineReducers } from 'redux';
import blogsReducer from './blogs_reducer';

const rootReducer = combineReducers({
    blogs: blogsReducer
});

export default rootReducer;