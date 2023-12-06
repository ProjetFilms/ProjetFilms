import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDisplayComponent } from './film-display.component';

describe('FilmDisplayComponent', () => {
  let component: FilmDisplayComponent;
  let fixture: ComponentFixture<FilmDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilmDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
