import { Component ,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-micro-ui-d',
  templateUrl: './micro-ui-d.component.html',
  styleUrls: ['./micro-ui-d.component.css']
})
export class MicroUiDComponent {
  @Input() form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      age: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    });
  }

  isDirty(): boolean {
    return this.form.dirty;
  }

  getFormData(): any {
    return this.form.value;
  }
}
