import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateDataComponent } from './translate-data.component';

describe('TranslateDataComponent', () => {
  let component: TranslateDataComponent;
  let fixture: ComponentFixture<TranslateDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TranslateDataComponent]
    });
    fixture = TestBed.createComponent(TranslateDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
