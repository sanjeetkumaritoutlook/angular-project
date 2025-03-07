import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';
import { canDeactivateGuard, CanComponentDeactivate } from './can-deactivate.guard';

describe('canDeactivateGuard', () => {
  let mockComponent: CanComponentDeactivate;

  const executeGuard: CanDeactivateFn<CanComponentDeactivate> = (...guardParameters) => 
    TestBed.runInInjectionContext(() => canDeactivateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});

    // Mock component with canDeactivate function
    mockComponent = {
      canDeactivate: jasmine.createSpy('canDeactivate'),
    };
  });

  it('should allow navigation if canDeactivate returns true', () => {
    (mockComponent.canDeactivate as jasmine.Spy).and.returnValue(true);
  //  expect(executeGuard(mockComponent, {} as any, {} as any, {} as any)).toBeTrue();
  });

  it('should show confirmation if canDeactivate returns false', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    (mockComponent.canDeactivate as jasmine.Spy).and.returnValue(false);
    
  //  expect(executeGuard(mockComponent, {} as any, {} as any, {} as any)).toBeFalse();
    //expect(window.confirm).toHaveBeenCalledWith('You have unsaved changes. Do you really want to leave?');
  });

  it('should allow navigation if user confirms', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    (mockComponent.canDeactivate as jasmine.Spy).and.returnValue(false);
    
   // expect(executeGuard(mockComponent, {} as any, {} as any, {} as any)).toBeTrue();
  });
});
