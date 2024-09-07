import { TestBed } from '@angular/core/testing';

import { CapitalizeFirstVowelService } from './capitalize-first-vowel.service';

describe('CapitalizeFirstVowelService', () => {
  let service: CapitalizeFirstVowelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapitalizeFirstVowelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
