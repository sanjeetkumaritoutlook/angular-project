import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalstorageDemoComponent } from './localstorage-demo.component';

describe('LocalstorageDemoComponent', () => {
  let component: LocalstorageDemoComponent;
  let fixture: ComponentFixture<LocalstorageDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalstorageDemoComponent]
    });
    fixture = TestBed.createComponent(LocalstorageDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
