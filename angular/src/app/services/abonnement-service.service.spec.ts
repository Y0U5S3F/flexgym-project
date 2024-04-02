import { TestBed } from '@angular/core/testing';

import { AbonnementServiceService } from './abonnement-service.service';

describe('AbonnementServiceService', () => {
  let service: AbonnementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbonnementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
