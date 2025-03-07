import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentUiComponent } from './parent-ui.component';

describe('ParentUiComponent', () => {
  let component: ParentUiComponent;
  let fixture: ComponentFixture<ParentUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentUiComponent]
    });
    fixture = TestBed.createComponent(ParentUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    //expect(component).toBeTruthy();
  });
});
