import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAbonnementComponent } from './table-abonnement.component';

describe('TableAbonnementComponent', () => {
  let component: TableAbonnementComponent;
  let fixture: ComponentFixture<TableAbonnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableAbonnementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableAbonnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
