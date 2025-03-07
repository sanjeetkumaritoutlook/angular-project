import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroUiBComponent } from './micro-ui-b.component';

describe('MicroUiBComponent', () => {
  let component: MicroUiBComponent;
  let fixture: ComponentFixture<MicroUiBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MicroUiBComponent]
    });
    fixture = TestBed.createComponent(MicroUiBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
