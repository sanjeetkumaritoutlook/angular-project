import { CanDeactivateFn } from '@angular/router';
import { ParentWebComponent } from './parent-web/parent-web.component';
export const canDeactivateWebGuard: CanDeactivateFn<ParentWebComponent> = (component, currentRoute, currentState, nextState) => {
  if (component.hasUnsavedChanges()) {
    return confirm('You have unsaved changes. Do you really want to leave?');
  }
  return true;
};
