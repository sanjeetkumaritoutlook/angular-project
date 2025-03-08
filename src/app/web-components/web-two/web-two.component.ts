import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-web-two',
  template: `
  <form #anotherForm="ngForm">
    <label>
      Email:
      <input type="email" [(ngModel)]="formData.email" name="email" (ngModelChange)="onFormChange()" />
    </label>
    <button type="button" (click)="saveForm()">Save</button>
  </form>
`,
styles: [':host { display: block; padding: 10px; border: 1px solid #ccc; }'],
})
export class WebTwoComponent {
  formData = { email: '' };
  private isDirty = false;

  constructor(private elementRef: ElementRef) {}

  //custom event dispatched
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
    console.log('Form saved:', this.formData);
    this.emitFormDirtyState(false);
  }
}
