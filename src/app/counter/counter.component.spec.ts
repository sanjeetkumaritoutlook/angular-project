//import { ComponentFixture, TestBed } from '@angular/core/testing';
import { render, fireEvent, screen } from '@testing-library/angular';

import { CounterComponent } from './counter.component';

// describe('CounterComponent', () => {
//   let component: CounterComponent;
//   let fixture: ComponentFixture<CounterComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [CounterComponent]
//     });
//     fixture = TestBed.createComponent(CounterComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

//using jest

describe('CounterComponent', () => {
  it('should render and increment/decrement correctly', async () => {
    await render(CounterComponent);

    // Get elements by test IDs
    const count = screen.getByTestId('count');
    const incrementButton = screen.getByTestId('increment');
    const decrementButton = screen.getByTestId('decrement');

    // Initial count should be 0
    expect(count.textContent).toBe('0');

    // Click increment button
    fireEvent.click(incrementButton);
    expect(count.textContent).toBe('1');

    // Click decrement button
    fireEvent.click(decrementButton);
    expect(count.textContent).toBe('0');
  });
});