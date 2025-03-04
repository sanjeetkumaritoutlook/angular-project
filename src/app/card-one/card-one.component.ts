import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-card-one',
  template: `
    <div class="card">
      <h3>{{ title }}</h3>
      <p>{{ content }}</p>
    </div>
  `,
  styleUrls: ['./card-one.component.css']
})
export class CardOneComponent {
  @Input() title = '';
  @Input() content = '';
}
