//import { TestBed } from '@angular/core/testing';

import { MathService } from './math.service';

// describe('MathService', () => {
//   let service: MathService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(MathService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

//using jest
describe('MathService', () => {
  let service: MathService;

  beforeEach(() => {
    service = new MathService();
  });

  it('should add numbers correctly', () => {
    expect(service.add(2, 3)).toBe(5);
  });

  it('should subtract numbers correctly', () => {
    expect(service.subtract(5, 3)).toBe(2);
  });
});
