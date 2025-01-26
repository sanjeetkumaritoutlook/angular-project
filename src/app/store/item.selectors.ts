//Define Selectors: Create selectors to retrieve pieces of state from the store.
//===
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ItemState } from './item.reducer';


//export const selectItems = (state: any) => state.items;
//export const selectItemList = createSelector(selectItems, (state: ItemState) => state.items);

export const selectItemState = createFeatureSelector<ItemState>('item');

export const selectItems = createSelector(
  selectItemState,
  (state: ItemState) => state.items
);