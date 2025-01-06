import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-mat-design',
  templateUrl: './mat-design.component.html',
  styleUrls: ['./mat-design.component.css']
})
export class MatDesignComponent {
// Inside your component class
emailFormControl = new FormControl('', [
  Validators.required,
  Validators.email,
]);
}
