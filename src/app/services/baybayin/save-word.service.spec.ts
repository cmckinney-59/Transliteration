import { TestBed } from '@angular/core/testing';

import { ExportWordService } from './save-word.service';

describe('ExportWordService', () => {
  let service: ExportWordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExportWordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
