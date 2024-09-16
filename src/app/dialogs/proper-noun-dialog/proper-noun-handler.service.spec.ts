import { TestBed } from '@angular/core/testing';

import { ProperNounHandlerService } from './proper-noun-handler.service';

describe('ProperNounHandlerService', () => {
  let service: ProperNounHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProperNounHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
