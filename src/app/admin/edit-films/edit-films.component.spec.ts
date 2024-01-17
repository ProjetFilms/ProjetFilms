import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFilmsComponent } from './edit-films.component';

describe('EditFilmsComponent', () => {
  let component: EditFilmsComponent;
  let fixture: ComponentFixture<EditFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditFilmsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
