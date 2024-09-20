import { TestBed } from '@angular/core/testing';

import { JHandlerService } from './j-handler.service';

describe('JHandlerService', () => {
  let service: JHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
