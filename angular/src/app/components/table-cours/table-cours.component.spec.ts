import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCoursComponent } from './table-cours.component';

describe('TableCoursComponent', () => {
  let component: TableCoursComponent;
  let fixture: ComponentFixture<TableCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableCoursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
