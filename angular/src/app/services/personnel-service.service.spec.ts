import { TestBed } from '@angular/core/testing';

import { PersonnelServiceService } from './personnel-service.service';

describe('PersonnelServiceService', () => {
  let service: PersonnelServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonnelServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
