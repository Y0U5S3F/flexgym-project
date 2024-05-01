import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonnementAdminComponent } from './abonnement-admin.component';

describe('AbonnementAdminComponent', () => {
  let component: AbonnementAdminComponent;
  let fixture: ComponentFixture<AbonnementAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AbonnementAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbonnementAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
