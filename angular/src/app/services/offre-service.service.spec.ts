import { TestBed } from '@angular/core/testing';

import { OffreServiceService } from './offre-service.service';

describe('OffreServiceService', () => {
  let service: OffreServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffreServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
