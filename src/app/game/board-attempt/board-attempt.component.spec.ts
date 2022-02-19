import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardAttemptComponent } from './board-attempt.component';

describe('BoardAttemptComponent', () => {
  let component: BoardAttemptComponent;
  let fixture: ComponentFixture<BoardAttemptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardAttemptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardAttemptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
