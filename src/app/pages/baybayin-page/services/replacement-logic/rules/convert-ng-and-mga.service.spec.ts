import { TestBed } from '@angular/core/testing';

import { ConvertNgAndMgaService } from './convert-ng-and-mga.service';

describe('ConvertNgAndMgaService', () => {
  let service: ConvertNgAndMgaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvertNgAndMgaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
