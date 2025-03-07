import { Component, ViewChildren, QueryList } from '@angular/core';
import { MicroUiComponent } from '../micro-ui/micro-ui.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-parent-ui',
  templateUrl: './parent-ui.component.html',
  styleUrls: ['./parent-ui.component.css']
})
export class ParentUiComponent {
  @ViewChildren(MicroUiComponent) microUIs!: QueryList<MicroUiComponent>;
  constructor(private router: Router) {}
  showUnsavedChangesModal = false;
  pendingNavigation: any = null;
  sharedData: any = {}; // Store shared data


  hasUnsavedChanges(): boolean {
    return this.microUIs?.some(ui => ui.isDirty());
  }

  saveAll(): void {
    const dataToSave = this.microUIs
      .filter(ui => ui.isDirty())
      .map(ui => ui.getFormData());

    if (dataToSave.length > 0) {
      this.saveDataToDB(dataToSave);
      this.router.navigate(['/table-export']);
    }
  }

  saveDataToDB(data: any[]): void {
    console.log('Saving Data:', data);
    this.microUIs.forEach(ui => ui.form.markAsPristine()); // Mark forms as saved
  }

  attemptNavigation(navigation: any) {
    if (this.hasUnsavedChanges()) {
      this.showUnsavedChangesModal = true;
      this.pendingNavigation = navigation;  // Store function for later execution
    } else {
      navigation();  // Execute navigation immediately if no changes
    }
  }
  attemptNavigationToAnotherPage() {
    this.attemptNavigation(() => console.log('Navigating away...'));
    this.router.navigate(['/table-export']);
  }
  
  confirmNavigation() {
    this.showUnsavedChangesModal = false;
    if (this.pendingNavigation) {
      this.pendingNavigation(); // Execute the stored navigation function
      this.pendingNavigation = null;
    }
  }

  cancelNavigation() {
    this.showUnsavedChangesModal = false;
    this.pendingNavigation = null;
  }
  updateSharedData(data: any) {
    this.sharedData = data; // Update state
  }
}
