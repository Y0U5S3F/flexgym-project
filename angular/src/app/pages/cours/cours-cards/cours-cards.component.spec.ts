import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursCardsComponent } from './cours-cards.component';

describe('CoursCardsComponent', () => {
  let component: CoursCardsComponent;
  let fixture: ComponentFixture<CoursCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoursCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
