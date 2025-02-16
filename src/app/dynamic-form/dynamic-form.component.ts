import { Component } from '@angular/core';
import { ReactiveFormsModule, FormArray, FormControl, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
})
export class DynamicFormComponent {
  constructor(private http: HttpClient) {}

  form = new FormGroup({
    employees: new FormArray([
      new FormGroup({
        name: new FormControl(''),
        employeeId: new FormControl(''),
        salary: new FormControl(''),
        dateOfJoining: new FormControl(''),
        age: new FormControl('')
      })
    ]),
    department: new FormControl('IT')
  });

  get employees() {
    return this.form.get('employees') as FormArray;
  }

  addEmployee() {
    this.employees.push(new FormGroup({
      name: new FormControl(''),
      employeeId: new FormControl(''),
      salary: new FormControl(''),
      dateOfJoining: new FormControl(''),
      age: new FormControl('')
    }));
  }

  removeEmployee(index: number) {
    this.employees.removeAt(index);
  }

  submitForm() {
    this.http.post('https://jsonplaceholder.typicode.com/posts?q=title', this.form.value)
      .subscribe(response => console.log('Form submitted:', response));
  }
}
