import { TestBed } from '@angular/core/testing';

import { TableCalendarService } from './table-calendar.service';

describe('TableCalendarService', () => {
  let service: TableCalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableCalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
