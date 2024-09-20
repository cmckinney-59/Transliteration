import { TestBed } from '@angular/core/testing';

import { BaybayinDialogProcessorService } from './baybayin-dialog-processor.service';

describe('BaybayinDialogProcessorService', () => {
  let service: BaybayinDialogProcessorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaybayinDialogProcessorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
