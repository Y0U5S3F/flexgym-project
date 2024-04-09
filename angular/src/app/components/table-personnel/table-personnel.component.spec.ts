import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePersonnelComponent } from './table-personnel.component';

describe('TablePersonnelComponent', () => {
  let component: TablePersonnelComponent;
  let fixture: ComponentFixture<TablePersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablePersonnelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablePersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
