import { TestBed } from '@angular/core/testing';

import { ChHandlerService } from './ch-handler.service';

describe('ChHandlerService', () => {
  let service: ChHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
