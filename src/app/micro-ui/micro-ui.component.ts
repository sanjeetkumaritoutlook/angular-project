import { Component,Input,Output, EventEmitter  } from '@angular/core';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
@Component({
  selector: 'app-micro-ui',
  templateUrl: './micro-ui.component.html',
  styleUrls: ['./micro-ui.component.css']
})
export class MicroUiComponent {
  //@Output() formChanges = new EventEmitter<boolean>();
  @Input() form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  isDirty(): boolean {
    return this.form.dirty;
  }

  getFormData(): any {
    return this.form.value;
  }

}
