import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import blogsReducer from './blogs_reducer';


const rootReducer = combineReducers({
    blogs: blogsReducer,
    form: formReducer
});

export default rootReducer;