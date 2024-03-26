import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarClientComponent } from './calendar-client.component';

describe('CalendarClientComponent', () => {
  let component: CalendarClientComponent;
  let fixture: ComponentFixture<CalendarClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalendarClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalendarClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
