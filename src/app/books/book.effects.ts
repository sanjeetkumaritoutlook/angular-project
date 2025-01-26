import { Injectable } from "@angular/core";
import { Actions, createEffect,ofType } from '@ngrx/effects';
import * as bookActions from './book.actions';
import { BookService } from './book.service';
import { mergeMap,map,catchError ,of} from "rxjs";
@Injectable()
export class BookEffects {
    //create Effect to handle side effects like API calls -its Observable
    //effect will only run when specific action occurs
   //This is an NgRx Effect that respond to ‘Addbook ‘ actions
    addBook$ = createEffect(() =>   this.actions$.pipe(
        //Listens for actions of type ‘AddBook’
            ofType(bookActions.AddBook),
            //For each ‘addBook’ action, call ‘addBook’ on book service
          //’mergeMap’ allows multiple concurrent  ‘addBook’ calls
            mergeMap((action) => this.bookService.addBook(action)
            .pipe(
                //If the ‘addBook’ call is successful,dispatch ‘AddBookSuccess’ action with the book data
                map((book) => bookActions.AddBookSuccess(book)),
                //If the ‘addBook’ call fails,dispatch ‘AddBookFailure action with the error
                catchError((error) => of(bookActions.AddBookFailure({error})))
            )))
            );
    constructor(private actions$: Actions,
         private bookService: BookService) {}
}