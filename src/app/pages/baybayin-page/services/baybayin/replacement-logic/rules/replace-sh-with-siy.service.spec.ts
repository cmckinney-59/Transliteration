import { TestBed } from '@angular/core/testing';

import { ReplaceShWithSiyService } from './replace-sh-with-siy.service';

describe('ReplaceShWithSiyService', () => {
  let service: ReplaceShWithSiyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReplaceShWithSiyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
