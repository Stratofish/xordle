import { TestBed } from '@angular/core/testing';

import { GameplayServiceService } from './GameplayService.service';

describe('GameplayServiceService', () => {
  let service: GameplayServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameplayServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
