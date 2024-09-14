import { TestBed } from '@angular/core/testing';

import { CHandlerService } from './c-handler.service';

describe('CHandlerService', () => {
  let service: CHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
