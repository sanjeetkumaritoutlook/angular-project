import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-card-three',
  templateUrl: './card-three.component.html',
  styleUrls: ['./card-three.component.css']
})
export class CardThreeComponent {
  @Input() title?: string;
  @Input() content?: string;

  get hasTitle() {
    return !!this.title;
  }

  get hasContent() {
    return !!this.content;
  }
}
