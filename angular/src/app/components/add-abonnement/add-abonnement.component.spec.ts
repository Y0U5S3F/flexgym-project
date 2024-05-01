import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAbonnementComponent } from './add-abonnement.component';

describe('AddAbonnementComponent', () => {
  let component: AddAbonnementComponent;
  let fixture: ComponentFixture<AddAbonnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddAbonnementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddAbonnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
