import { Component ,ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-web-ui-a',
  template: `
  <form [formGroup]="form">
    <input formControlName="name" (input)="onFormChange()" placeholder="Name" />
    <input formControlName="email" (input)="onFormChange()" placeholder="Email" />
  </form>
`,
  styleUrls: ['./web-ui-a.component.css']
})
export class WebUiAComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private el: ElementRef) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onFormChange() {
    // Emit event when form is dirty
    this.el.nativeElement.dispatchEvent(new CustomEvent('formDirty', { bubbles: true }));
  }
}
