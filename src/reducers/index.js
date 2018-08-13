import { combineReducers } from 'redux';
import BooksReducer from './reducer_books.js';
import ActiveBookReducer from './reducer_active_book.js';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;
