import { createReducer, on } from '@ngrx/store';
import { AddBook,RemoveBook } from './book.actions';
import { Book } from '../models/book';
//reducer is taking cae of segment of app state

//export const initialState: ReadonlyArray<Book> = [];
export const initialState: Book[] = []; //(if using Global AppState interface)

export const BookReducer = createReducer(
  initialState,
  on(AddBook, (state, { id,title,author }) => [...state, {id,title,author}]),
  on(RemoveBook, (state, { bookId }) => state.filter(book => book.id !== bookId))
);
