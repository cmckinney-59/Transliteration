import { TestBed } from '@angular/core/testing';

import { AddPlusAfterConsonantService } from './add-plus-after-consonant.service';

describe('AddPlusAfterConsonantService', () => {
  let service: AddPlusAfterConsonantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddPlusAfterConsonantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
