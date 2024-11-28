import { TestBed } from '@angular/core/testing';

import { ReplaceXWithKsService } from './replace-x-with-ks.service';

describe('ReplaceXWithKsService', () => {
  let service: ReplaceXWithKsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReplaceXWithKsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
