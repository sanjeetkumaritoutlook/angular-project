import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroUiCComponent } from './micro-ui-c.component';

describe('MicroUiCComponent', () => {
  let component: MicroUiCComponent;
  let fixture: ComponentFixture<MicroUiCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MicroUiCComponent]
    });
    fixture = TestBed.createComponent(MicroUiCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
