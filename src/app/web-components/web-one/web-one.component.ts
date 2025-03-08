import { Component, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-web-one',
  template: `
  <form #myForm="ngForm">
    <label>
      Name:
      <input type="text" [(ngModel)]="formData.name" name="name" (ngModelChange)="onFormChange()" />
    </label>
    <button type="button" (click)="saveForm()">Save</button>
  </form>
`,
styles: [':host { display: block; padding: 10px; border: 1px solid #ccc; }'],
})
export class WebOneComponent {
  formData = { name: '' };
  private isDirty = false;

  constructor(private elementRef: ElementRef) {}

  //here custom event is dispatched
  private emitFormDirtyState(isDirty: boolean) {
    this.isDirty = isDirty;
    this.elementRef.nativeElement.dispatchEvent(
      new CustomEvent('formDirty', { detail: isDirty, bubbles: true, composed: true })
    );
  }

  onFormChange() {
    if (!this.isDirty) {
      this.emitFormDirtyState(true);
    }
  }

  saveForm() {
    // Simulate saving the form
    console.log('Form saved:', this.formData);

    // Reset dirty state
    this.emitFormDirtyState(false);
  }
}
