import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerNotFoundComponent } from './player-not-found.component';

describe('PlayerNotFoundComponent', () => {
  let component: PlayerNotFoundComponent;
  let fixture: ComponentFixture<PlayerNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
