import { TestBed } from '@angular/core/testing';

import { RemoveAAfterConsonantService } from './remove-a-after-consonant.service';

describe('RemoveAAfterConsonantService', () => {
  let service: RemoveAAfterConsonantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoveAAfterConsonantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
