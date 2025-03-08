import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebTwoComponent } from './web-two.component';

describe('WebTwoComponent', () => {
  let component: WebTwoComponent;
  let fixture: ComponentFixture<WebTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebTwoComponent]
    });
    fixture = TestBed.createComponent(WebTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
