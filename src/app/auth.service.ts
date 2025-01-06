import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  login(username: string, password: string): boolean {
    // Implement your authentication logic here, like calling an API
    if (username === 'user' && password === 'password') {
      this.isLoggedIn = true;
      console.log('logged in');
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    this.isLoggedIn = false;
  }
  constructor() { }
}
