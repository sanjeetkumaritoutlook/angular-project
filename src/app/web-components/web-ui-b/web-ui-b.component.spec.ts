import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebUiBComponent } from './web-ui-b.component';

describe('WebUiBComponent', () => {
  let component: WebUiBComponent;
  let fixture: ComponentFixture<WebUiBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebUiBComponent]
    });
    fixture = TestBed.createComponent(WebUiBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
