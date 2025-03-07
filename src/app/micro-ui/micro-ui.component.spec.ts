import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroUiComponent } from './micro-ui.component';

describe('MicroUiComponent', () => {
  let component: MicroUiComponent;
  let fixture: ComponentFixture<MicroUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MicroUiComponent]
    });
    fixture = TestBed.createComponent(MicroUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
