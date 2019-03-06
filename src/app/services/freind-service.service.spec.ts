import { TestBed } from '@angular/core/testing';

import { FreindServiceService } from './freind-service.service';

describe('FreindServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FreindServiceService = TestBed.get(FreindServiceService);
    expect(service).toBeTruthy();
  });
});
