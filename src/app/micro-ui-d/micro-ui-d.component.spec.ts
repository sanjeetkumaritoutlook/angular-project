import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroUiDComponent } from './micro-ui-d.component';

describe('MicroUiDComponent', () => {
  let component: MicroUiDComponent;
  let fixture: ComponentFixture<MicroUiDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MicroUiDComponent]
    });
    fixture = TestBed.createComponent(MicroUiDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
