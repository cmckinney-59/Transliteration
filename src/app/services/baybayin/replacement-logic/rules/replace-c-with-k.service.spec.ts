import { TestBed } from '@angular/core/testing';

import { ReplaceCWithKService } from './replace-c-with-k.service';

describe('ReplaceCWithKService', () => {
  let service: ReplaceCWithKService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReplaceCWithKService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
