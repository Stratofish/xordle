import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardLetterComponent } from './board-letter.component';

describe('BoardLetterComponent', () => {
  let component: BoardLetterComponent;
  let fixture: ComponentFixture<BoardLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardLetterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
