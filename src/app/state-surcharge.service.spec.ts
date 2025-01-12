import { TestBed } from '@angular/core/testing';

import { StateSurchargeService } from './state-surcharge.service';

describe('StateSurchargeService', () => {
  let service: StateSurchargeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateSurchargeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
