import { CanDeactivateFn } from '@angular/router';
import { ParentUiBComponent } from './parent-ui-b/parent-ui-b.component';
export const canDeactivateTwoGuard: CanDeactivateFn<ParentUiBComponent> = (component, currentRoute, currentState, nextState) => {
  // Check if component has unsaved changes
  if (component.hasUnsavedChanges()) {
    return confirm('You have unsaved changes. Do you really want to leave?');
  }
  return true; // Allow navigation if no changes
};
