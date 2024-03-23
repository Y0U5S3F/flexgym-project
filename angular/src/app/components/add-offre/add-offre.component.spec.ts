import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOffreComponent } from './add-offre.component';

describe('AddOffreComponent', () => {
  let component: AddOffreComponent;
  let fixture: ComponentFixture<AddOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddOffreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
