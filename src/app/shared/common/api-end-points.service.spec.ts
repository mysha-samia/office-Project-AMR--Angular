import { TestBed } from '@angular/core/testing';

import { ApiEndPointsService } from './api-end-points.service';

describe('ApiEndPointsService', () => {
  let service: ApiEndPointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiEndPointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
