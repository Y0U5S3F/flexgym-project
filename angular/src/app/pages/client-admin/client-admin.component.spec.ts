import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAdminComponent } from './client-admin.component';

describe('ClientAdminComponent', () => {
  let component: ClientAdminComponent;
  let fixture: ComponentFixture<ClientAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
