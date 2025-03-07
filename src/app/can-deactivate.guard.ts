import { CanDeactivateFn } from '@angular/router';
import { ParentUiComponent } from './parent-ui/parent-ui.component';
export interface CanComponentDeactivate {
  canDeactivate: () => boolean;
}

// export const canDeactivateGuard: CanDeactivateFn<CanComponentDeactivate> = (component, currentRoute, currentState, nextState) => {
//   return component.canDeactivate() || confirm('You have unsaved changes. Do you really want to leave?');
// };

export const canDeactivateGuard: CanDeactivateFn<ParentUiComponent> = (component) => {
  if (component.hasUnsavedChanges()) {
    component.showUnsavedChangesModal = true;
    return false;
  }
  return true;
};