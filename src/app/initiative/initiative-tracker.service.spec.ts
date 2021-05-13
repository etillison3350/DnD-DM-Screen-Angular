import { TestBed } from '@angular/core/testing';

import { InitiativeTrackerService } from './initiative-tracker.service';

describe('InitiativeTrackerService', () => {
  let service: InitiativeTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InitiativeTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
