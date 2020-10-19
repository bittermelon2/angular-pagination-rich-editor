import { TestBed } from '@angular/core/testing';

import { RandomUserServiceService } from './random-user-service.service';

describe('RandomUserServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomUserServiceService = TestBed.get(RandomUserServiceService);
    expect(service).toBeTruthy();
  });
});
