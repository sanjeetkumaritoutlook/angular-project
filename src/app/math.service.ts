import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  constructor(private http: HttpClient) {}
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  getRandomNumber(): Observable<number> {
    return this.http
      .get('https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new', { responseType: 'text' })
      .pipe(map((res) => parseInt(res, 10)));
  }
  
  /*
  getRandomNumber(): Observable<number> {
  return this.http.get<string>(
    "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new",
    { responseType: 'text' as 'text' }  // 👈 Type assertion here
  ).pipe(map(response => parseInt(response, 10)));
}

  */
  getRandomNumber1(): Observable<number> {
    return this.http.get<{ number: number }>('https://api.math.tools/numbers/n/random')
      .pipe(map((res) => res.number));
  }
  
  getRandomNumber2(): Observable<number> {
    return this.http.get<{ number: number }>('https://random-data-api.com/api/number/random_number')
      .pipe(map((res) => res.number));
  }
  
  getRandomNumber4(): Observable<number> {
    return this.http.get<{ id: number }>('https://jsonplaceholder.typicode.com/todos/1')
      .pipe(map((res) => res.id));
  }
  
}
