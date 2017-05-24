import { combineReducers } from 'redux'

import books from './bookReducers'

export default combineReducers({
  booksObj: books,
  // More reducers if there are
  // can go here
});