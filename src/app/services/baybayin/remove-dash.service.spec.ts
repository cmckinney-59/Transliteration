import { TestBed } from '@angular/core/testing';

import { RemoveDashService } from './remove-dash.service';

describe('RemoveDashService', () => {
  let service: RemoveDashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoveDashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
