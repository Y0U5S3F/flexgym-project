import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursAdminComponent } from './cours-admin.component';

describe('CoursAdminComponent', () => {
  let component: CoursAdminComponent;
  let fixture: ComponentFixture<CoursAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
