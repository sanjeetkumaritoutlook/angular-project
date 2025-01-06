import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDesignComponent } from './mat-design.component';

describe('MatDesignComponent', () => {
  let component: MatDesignComponent;
  let fixture: ComponentFixture<MatDesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatDesignComponent]
    });
    fixture = TestBed.createComponent(MatDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
