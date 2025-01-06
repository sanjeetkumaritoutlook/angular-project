import { Component } from '@angular/core';

@Component({
  selector: 'app-login-material',
  templateUrl: './login-material.component.html',
  styleUrls: ['./login-material.component.css']
})
export class LoginMaterialComponent {
  email: string;
  password: string;

  constructor() { }

  onSubmit() {
    // Add authentication logic here, e.g., calling an authentication service
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
