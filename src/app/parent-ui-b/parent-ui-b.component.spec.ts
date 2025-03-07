import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentUiBComponent } from './parent-ui-b.component';

describe('ParentUiBComponent', () => {
  let component: ParentUiBComponent;
  let fixture: ComponentFixture<ParentUiBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentUiBComponent]
    });
    fixture = TestBed.createComponent(ParentUiBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
