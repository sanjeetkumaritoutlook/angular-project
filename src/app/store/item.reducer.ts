//Create Reducers: Implement reducers that modify the state based on actions.
//===
import { createReducer, on } from '@ngrx/store';
import { loadItemsSuccess, loadItemsFailure } from './item.actions';

export interface ItemState {
  items: string[];
  error: string | null;
}

export const initialState: ItemState = {
  items: [],
  error: null,
};

export const itemReducer = createReducer(
  initialState,
  on(loadItemsSuccess, (state, { items }) => ({ ...state, items })),
  on(loadItemsFailure, (state, { error }) => ({ ...state, error }))
);
