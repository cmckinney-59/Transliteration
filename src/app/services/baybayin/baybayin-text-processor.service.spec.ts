import { TestBed } from '@angular/core/testing';

import { BaybayinTextProcessorService } from './baybayin-text-processor.service';

describe('BaybayinTextProcessorService', () => {
  let service: BaybayinTextProcessorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaybayinTextProcessorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
