import { TestBed } from '@angular/core/testing';

import { ReplacePhWithFService } from './replace-ph-with-f.service';

describe('ReplacePhWithFService', () => {
  let service: ReplacePhWithFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReplacePhWithFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
