import { TestBed } from '@angular/core/testing';

import { CapitalizeSecondConsecutiveVowelService } from './capitalize-second-consecutive-vowel.service';

describe('CapitalizeSecondConsecutiveVowelService', () => {
  let service: CapitalizeSecondConsecutiveVowelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapitalizeSecondConsecutiveVowelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
