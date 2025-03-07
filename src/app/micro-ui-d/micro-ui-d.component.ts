import { Component ,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//Please NOTE:  its just a child component inside the Parent UI.
//A proper web-component  runs outside Angular’s change detection and outside  Angular’s lifecycle
//A proper web-component -You cannot directly access it using 
// @ViewChildren to check .isDirty() ,because Angular doesn’t recognize it as an Angular component.
//In that case, two options for proper web-component:
//✅ Option 1: Use window.addEventListener to Detect Changes,it should dispatch a custom event when data changes.
//✅ Option 2: Listen for Events in ParentUiComponent
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
