import { Component ,Input } from '@angular/core';

@Component({
  selector: 'app-micro-ui-b',
  templateUrl: './micro-ui-b.component.html',
  styleUrls: ['./micro-ui-b.component.css']
})
export class MicroUiBComponent {
  @Input() data!: any; // Receive data from parent

}
