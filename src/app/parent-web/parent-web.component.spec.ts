import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentWebComponent } from './parent-web.component';

describe('ParentWebComponent', () => {
  let component: ParentWebComponent;
  let fixture: ComponentFixture<ParentWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentWebComponent]
    });
    fixture = TestBed.createComponent(ParentWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
