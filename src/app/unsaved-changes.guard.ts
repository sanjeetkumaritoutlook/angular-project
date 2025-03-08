import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { NewParentComponent } from './new-parent/new-parent.component';

@Injectable({
  providedIn: 'root',
})
export class UnsavedChangesGuard implements CanDeactivate<NewParentComponent> {
  canDeactivate(component: NewParentComponent): boolean {
    if (component.isFormDirty) {
      return confirm('You have unsaved changes! Do you really want to leave?');
    }
    return true;
  }
}
