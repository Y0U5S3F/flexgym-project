import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffreAdminComponent } from './offre-admin.component';

describe('OffreAdminComponent', () => {
  let component: OffreAdminComponent;
  let fixture: ComponentFixture<OffreAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OffreAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OffreAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
