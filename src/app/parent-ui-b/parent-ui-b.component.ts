import { Component ,QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MicroUiCComponent } from '../micro-ui-c/micro-ui-c.component';
import { MicroUiDComponent } from '../micro-ui-d/micro-ui-d.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-parent-ui-b',
  templateUrl: './parent-ui-b.component.html',
  styleUrls: ['./parent-ui-b.component.css']
})
export class ParentUiBComponent {
  @ViewChildren(MicroUiCComponent) microUIs!: QueryList<MicroUiCComponent>;
  @ViewChildren(MicroUiDComponent) microUIBs!: QueryList<MicroUiDComponent>;
  forms: FormGroup[] = [];
  formsB: FormGroup[] = [];

  constructor(private fb: FormBuilder,private router: Router) {
    // Creating forms for each Micro UI
    this.forms = [
      this.fb.group({ name: [''], email: [''] }), // Form for MicroUiComponent
    ];
    this.formsB = [
      this.fb.group({ age: [''], phone: [''] }), // Form for MicroUiBComponent
    ];
  }

  hasUnsavedChanges(): boolean {
    return (
      this.microUIs.some((microUI) => microUI.isDirty()) ||
      this.microUIBs.some((microUIB) => microUIB.isDirty())
    );
  }
  attemptNavigationToAnotherPage() {
    this.attemptNavigation(() => console.log('Navigating away...'));
    this.router.navigate(['/table-export']);
  }
  attemptNavigation(navigation: () => void) {
    if (this.hasUnsavedChanges()) {
      if (confirm('You have unsaved changes. Do you want to save them?')) {
        this.saveAll();
        navigation();
      }
    } else {
      navigation();
    }
  }

  saveAll() {
    this.microUIs.forEach((microUI) => {
      if (microUI.isDirty()) {
        console.log('Saving Micro UI Data:', microUI.getFormData());
        microUI.form.markAsPristine();
      }
    });

    this.microUIBs.forEach((microUIB) => {
      if (microUIB.isDirty()) {
        console.log('Saving Micro UI B Data:', microUIB.getFormData());
        microUIB.form.markAsPristine();
      }
    });
  }
}
