import { Component , ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-web-ui-b',
  template: `
  <form [formGroup]="form">
    <input formControlName="address" (input)="onFormChange()" placeholder="Address" />
    <input formControlName="phone" (input)="onFormChange()" placeholder="Phone" />
  </form>
`,
  styleUrls: ['./web-ui-b.component.css']
})
export class WebUiBComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private el: ElementRef) {
    this.form = this.fb.group({
      address: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  onFormChange() {
    this.el.nativeElement.dispatchEvent(new CustomEvent('formDirty', { bubbles: true }));
  }
}
