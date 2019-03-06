import { TestBed } from '@angular/core/testing';

import { BankapiService } from './bankapi.service';

describe('BankapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BankapiService = TestBed.get(BankapiService);
    expect(service).toBeTruthy();
  });
});
