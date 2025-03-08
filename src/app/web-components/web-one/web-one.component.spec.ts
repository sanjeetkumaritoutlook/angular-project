import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebOneComponent } from './web-one.component';

describe('WebOneComponent', () => {
  let component: WebOneComponent;
  let fixture: ComponentFixture<WebOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebOneComponent]
    });
    fixture = TestBed.createComponent(WebOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
