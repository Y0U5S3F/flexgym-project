import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelAdminComponent } from './personnel-admin.component';

describe('PersonnelAdminComponent', () => {
  let component: PersonnelAdminComponent;
  let fixture: ComponentFixture<PersonnelAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonnelAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonnelAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
