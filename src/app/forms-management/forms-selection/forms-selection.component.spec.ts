import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsSelectionComponent } from './forms-selection.component';

describe('FormsSelectionComponent', () => {
  let component: FormsSelectionComponent;
  let fixture: ComponentFixture<FormsSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsSelectionComponent]
    });
    fixture = TestBed.createComponent(FormsSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
