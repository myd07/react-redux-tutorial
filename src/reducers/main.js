import { combineReducers } from 'redux';
import booksReducer from './inputBookReducer';
import activeBookReducer from './activeBookReducer';

var rootReducer = combineReducers({
	books: booksReducer,
	activeBook: activeBookReducer
})

export default rootReducer;