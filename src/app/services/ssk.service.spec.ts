import { TestBed } from '@angular/core/testing';

import { SskService } from './ssk.service';

describe('SskService', () => {
  let service: SskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
