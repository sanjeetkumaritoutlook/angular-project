import { Component ,ElementRef, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-parent-web',
  templateUrl: './parent-web.component.html',
  styleUrls: ['./parent-web.component.css']
})
export class ParentWebComponent implements AfterViewInit {
    private hasChanges = false;
  
    constructor(private el: ElementRef) {}
  
    ngAfterViewInit() {
      // Listen for `formDirty` event from all Web Components
      this.el.nativeElement.addEventListener('formDirty', () => {
        this.hasChanges = true;
      });
    }
  
    hasUnsavedChanges(): boolean {
      return this.hasChanges;
    }
  
    saveData() {
      // Simulate saving data
      console.log('Saving data...');
      this.hasChanges = false; // Reset changes after saving
    }
}
