import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,of,map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Example API endpoint

  constructor(private http: HttpClient) { }
  // Simulates fetching items from an API or backend
  getItems():Observable<string[]>{
    // Returning a mock list of items
    return of(['item1','item2','item3']);
  }
    // Fetching items from a public API
  getRealItems(): Observable<string[]> {
      return this.http.get<any[]>(this.apiUrl).pipe(
        map((posts) => posts.map((post) => post.title)) // Extracting 'title' from API response
      );
    }
}
