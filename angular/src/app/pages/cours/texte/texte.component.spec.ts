import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexteComponent } from './texte.component';

describe('TexteComponent', () => {
  let component: TexteComponent;
  let fixture: ComponentFixture<TexteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TexteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TexteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
