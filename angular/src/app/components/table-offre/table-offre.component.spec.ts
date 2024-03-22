import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOffreComponent } from './table-offre.component';

describe('TableOffreComponent', () => {
  let component: TableOffreComponent;
  let fixture: ComponentFixture<TableOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableOffreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});