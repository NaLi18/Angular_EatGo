import { TestBed } from '@angular/core/testing';

import { EatGoApiServiceService } from './eat-go-api-service.service';

describe('EatGoApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EatGoApiServiceService = TestBed.get(EatGoApiServiceService);
    expect(service).toBeTruthy();
  });
});
