import { Component } from '@angular/core';

@Component({
  selector: 'app-new-parent',
  templateUrl: './new-parent.component.html',
  styleUrls: ['./new-parent.component.css']
})
export class NewParentComponent {
  isFormDirty = false;

  onFormDirty(event: any) {
    this.isFormDirty = event.detail;  // Track form state
  }
}
