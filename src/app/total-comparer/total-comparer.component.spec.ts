import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalComparerComponent } from './total-comparer.component';

describe('TotalComparerComponent', () => {
  let component: TotalComparerComponent;
  let fixture: ComponentFixture<TotalComparerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalComparerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalComparerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
