import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h1 data-testid="count">{{ count }}</h1>
  <button data-testid="increment" (click)="increment()">+</button>
  <button data-testid="decrement" (click)="decrement()">-</button>
`,
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
