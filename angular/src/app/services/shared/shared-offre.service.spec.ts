import { TestBed } from '@angular/core/testing';

import { SharedOffreService } from './shared-offre.service';

describe('SharedOffreService', () => {
  let service: SharedOffreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedOffreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
