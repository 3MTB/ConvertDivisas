import { TestBed } from '@angular/core/testing';

import { OffLineServiceService } from './off-line-service.service';

describe('OffLineServiceService', () => {
  let service: OffLineServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffLineServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
