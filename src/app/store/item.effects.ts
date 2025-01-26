//Add Effects (Optional): Handle side effects like API calls.
//Effect communicates with the service to fetch the data, wait for the result and dispatches the action to the reducer.
import { Injectable } from '@angular/core';
import { Actions, createEffect,ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ItemService } from './item.service';
import { loadItems, loadItemsSuccess, loadItemsFailure } from './item.actions';

@Injectable()
export class ItemEffects {
  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadItems),
      mergeMap(() =>
        this.itemService.getRealItems().pipe(
          map(items => loadItemsSuccess({ items })),
          catchError(error => of(loadItemsFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private itemService: ItemService) {}
}


