import { TestBed } from '@angular/core/testing';

import { SelectorService } from './selector.service';

describe('SelectorService', () => {
  let service: SelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
