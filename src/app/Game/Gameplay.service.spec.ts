import { TestBed } from '@angular/core/testing';

import { GameplayServiceService } from './Gameplay.service';

describe('GameplayService', () => {
  let service: GameplayServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
