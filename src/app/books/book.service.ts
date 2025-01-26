import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable,of,throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
  addBook(book:Book):Observable<Book>{
     
    // const error = new Error('Failed to add book');
    // return throwError(() => error);
    
    return of(book);
   
  }
}
