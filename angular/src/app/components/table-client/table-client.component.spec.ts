import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableClientComponent } from './table-client.component';

describe('TableClientComponent', () => {
  let component: TableClientComponent;
  let fixture: ComponentFixture<TableClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
