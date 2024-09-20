import { TestBed } from '@angular/core/testing';

import { RemoveDuplicateConsonantService } from './remove-duplicate-consonant.service';

describe('RemoveDuplicateConsonantService', () => {
  let service: RemoveDuplicateConsonantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoveDuplicateConsonantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
