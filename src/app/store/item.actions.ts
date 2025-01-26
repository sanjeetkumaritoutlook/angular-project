//Define Actions: Define actions that represent the operations on the state.
//==
import { createAction, props } from '@ngrx/store';

export const loadItems = createAction('[Item List] Load Items');
export const loadItemsSuccess = createAction('[Item List] Load Items Success', props<{ items: string[] }>());
export const loadItemsFailure = createAction('[Item List] Load Items Failure', props<{ error: any }>());

