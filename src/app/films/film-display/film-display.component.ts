import { Component, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Film } from '../films.model';
import { EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-film-display',
  templateUrl: './film-display.component.html',
  styleUrl: './film-display.component.css',
})
export class FilmDisplayComponent {
  @Input()
  model: Film | null = null;
  @Output()
  emitFilm: EventEmitter<Film> = new EventEmitter<Film>();

  filmform = this.fb.group(
    {
      titre: this.fb.control('', [Validators.required]),
      real: this.fb.control(''),
      duree: this.fb.control(''),
      date: this.fb.control(''),
      genre: this.fb.control(''),
    },
    { updateOn: 'submit' }
  );
  submitted = false;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.submitted = false;

    if (this.model === null) {
      this.model = new Film();
    } else {
      this.filmform.patchValue(this.model);
    }
  }
  onSubmit() {
    this.submitted = true;
    if (this.filmform.valid) {
      this.model = { ...this.model!, ...this.filmform.value };
      this.emitFilm.emit(this.model!);
    }
  }
  resetForm() {
    if (this.model !== null) {
      this.filmform.patchValue(this.model);
    }
  }
}
