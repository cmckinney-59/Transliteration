import { TestBed } from '@angular/core/testing';

import { SaveTextService } from './save-text.service';

describe('SaveTextService', () => {
  let service: SaveTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
