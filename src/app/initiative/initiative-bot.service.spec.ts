import { TestBed } from '@angular/core/testing';

import { InitiativeBotService } from './initiative-bot.service';

describe('InitiativeBotService', () => {
  let service: InitiativeBotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InitiativeBotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
