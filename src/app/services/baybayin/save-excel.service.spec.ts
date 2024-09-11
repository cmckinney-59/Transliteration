import { TestBed } from '@angular/core/testing';

import { SaveExcelService } from './save-excel.service';

describe('SaveExcelService', () => {
  let service: SaveExcelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveExcelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
