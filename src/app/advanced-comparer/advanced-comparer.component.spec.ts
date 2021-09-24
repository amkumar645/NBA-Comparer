import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedComparerComponent } from './advanced-comparer.component';

describe('AdvancedComparerComponent', () => {
  let component: AdvancedComparerComponent;
  let fixture: ComponentFixture<AdvancedComparerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedComparerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedComparerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
