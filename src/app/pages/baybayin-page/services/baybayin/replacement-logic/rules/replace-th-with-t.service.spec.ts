import { TestBed } from '@angular/core/testing';

import { ReplaceThWithTService } from './replace-th-with-t.service';

describe('ReplaceThWithTService', () => {
  let service: ReplaceThWithTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReplaceThWithTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
