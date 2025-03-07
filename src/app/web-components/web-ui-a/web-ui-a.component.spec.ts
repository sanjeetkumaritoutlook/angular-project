import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebUiAComponent } from './web-ui-a.component';

describe('WebUiAComponent', () => {
  let component: WebUiAComponent;
  let fixture: ComponentFixture<WebUiAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebUiAComponent]
    });
    fixture = TestBed.createComponent(WebUiAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
