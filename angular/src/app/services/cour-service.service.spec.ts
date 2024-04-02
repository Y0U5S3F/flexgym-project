import { TestBed } from '@angular/core/testing';

import { CourServiceService } from './cour-service.service';

describe('CourServiceService', () => {
  let service: CourServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
