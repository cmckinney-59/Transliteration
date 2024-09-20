import { TestBed } from '@angular/core/testing';

import { QuHandlerService } from './qu-handler.service';

describe('QuHandlerService', () => {
  let service: QuHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
