import { jest } from '@jest/globals';  // 👈 Add this line
import { TestBed } from '@angular/core/testing';
import { MathService } from './math.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

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
// describe('MathService', () => {
//   let service: MathService;

//   beforeEach(() => {
//     service = new MathService();
//   });

//   it('should add numbers correctly', () => {
//     expect(service.add(2, 3)).toBe(5);
//   });

//   it('should subtract numbers correctly', () => {
//     expect(service.subtract(5, 3)).toBe(2);
//   });
// });

describe('MathService (Jest)', () => {
  let service: MathService;
  let httpClientMock: jest.Mocked<HttpClient>;

  beforeEach(() => {
    // Mock HttpClient
    httpClientMock = {
      get: jest.fn(),
      post: jest.fn(),
      put: jest.fn(),
      delete: jest.fn(),
    } as unknown as jest.Mocked<HttpClient>;

    TestBed.configureTestingModule({
      providers: [
        MathService,
        { provide: HttpClient, useValue: httpClientMock },
      ],
    });

    service = TestBed.inject(MathService);
  });

  it('should fetch a random number from API', (done) => {
    // Mock API response
    const mockResponse = 42;
    httpClientMock.get.mockReturnValue(of(mockResponse));

    service.getRandomNumber().subscribe((result) => {
      expect(result).toBe(42);
      expect(httpClientMock.get).toHaveBeenCalledWith(
        "https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new",
        { responseType: 'text' } as any  // 👈 Bypass strict type checking
      );
      done();
    });
  });
});