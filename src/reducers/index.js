import { combineReducers } from 'redux';
import books from './reducer-books';
import activeBook from './reducer-active-book';

const RootReducer = combineReducers( {
	books,
	activeBook
} );

export default RootReducer;
