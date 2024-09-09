import { TestBed } from '@angular/core/testing';

import { SaveWordService } from './save-word.service';

describe('SaveWordService', () => {
  let service: SaveWordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveWordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
