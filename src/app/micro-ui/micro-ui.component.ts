import { Component,Input,Output, EventEmitter  } from '@angular/core';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
@Component({
  selector: 'app-micro-ui',
  templateUrl: './micro-ui.component.html',
  styleUrls: ['./micro-ui.component.css']
})
export class MicroUiComponent {
  @Input() form!: FormGroup;
  @Output() formDataChanged = new EventEmitter<any>(); // Emit data to parent

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
  onFormChange() {
    this.formDataChanged.emit(this.form.value); // Send data to parent
  }
}
