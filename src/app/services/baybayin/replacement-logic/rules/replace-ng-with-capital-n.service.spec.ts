import { TestBed } from '@angular/core/testing';

import { ReplaceNgWithCapitalNService } from './replace-ng-with-capital-n.service';

describe('ReplaceNgWithCapitalNService', () => {
  let service: ReplaceNgWithCapitalNService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReplaceNgWithCapitalNService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
