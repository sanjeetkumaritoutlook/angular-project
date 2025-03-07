import { Component ,Input } from '@angular/core';
//Please NOTE:  its just a child component inside the Parent UI.
//A proper web-component  runs outside Angular’s change detection and outside  Angular’s lifecycle
//A proper web-component -You cannot directly access it using 
// @ViewChildren to check .isDirty() ,because Angular doesn’t recognize it as an Angular component.
//In that case, two options for proper web-component:
//✅ Option 1: Use window.addEventListener to Detect Changes,it should dispatch a custom event when data changes.
//✅ Option 2: Listen for Events in ParentUiComponent
@Component({
  selector: 'app-micro-ui-b',
  templateUrl: './micro-ui-b.component.html',
  styleUrls: ['./micro-ui-b.component.css']
})
export class MicroUiBComponent {
  @Input() data!: any; // Receive data from parent

}
