import { Component } from '@angular/core';

@Component({
  selector: 'app-card-two',
  template: `
    <div class="card">
      <ng-content select="[card-title]"></ng-content>
      <ng-content select="[card-content]"></ng-content>
    </div>
  `,
  styleUrls: ['./card-two.component.css']
})
export class CardTwoComponent {

}
