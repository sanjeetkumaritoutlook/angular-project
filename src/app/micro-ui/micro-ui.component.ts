import { Component,Input,Output, EventEmitter  } from '@angular/core';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
@Component({
  selector: 'app-micro-ui',
  templateUrl: './micro-ui.component.html',
  styleUrls: ['./micro-ui.component.css']
})
//Please NOTE:  its just a child component inside the Parent UI.
//A proper web-component  runs outside Angular’s change detection and outside  Angular’s lifecycle
//A proper web-component -You cannot directly access it using 
// @ViewChildren to check .isDirty() ,because Angular doesn’t recognize it as an Angular component.
//In that case, two options for proper web-component:
//✅ Option 1: Use window.addEventListener to Detect Changes,it should dispatch a custom event when data changes.
//✅ Option 2: Listen for Events in ParentUiComponent

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
