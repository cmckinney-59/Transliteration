import { TestBed } from '@angular/core/testing';

import { ConvertToLowercaseService } from './convert-to-lowercase.service';

describe('ConvertToLowercaseService', () => {
  let service: ConvertToLowercaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvertToLowercaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
