import { createAction, props } from '@ngrx/store';
import { Book } from '../models/book';
export const AddBook = createAction('[Book] Add Book', props<Book>());
export const loadItemsSuccess = createAction('[Book] Load Items Success', props<{ items: string[] }>());
export const loadItemsFailure = createAction('[Book] Load Items Failure', props<{ error: any }>());
export const RemoveBook = createAction('[Book] Remove Book', props<{bookId:string}>());

