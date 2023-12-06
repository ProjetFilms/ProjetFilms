import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Film } from '../films.model';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrl: './films-list.component.css',
})
export class FilmsListComponent implements OnInit {
  filmsForm = this.fb.group(
    {
      titre: this.fb.control('', [Validators.required]),
      realisateur: this.fb.control(''),
      duree: this.fb.control(''),
      date: this.fb.control(''),
      genre: this.fb.control(''),
    },
    { updateOn: 'submit' }
  );

  model: Film;
  listFilm: Array<Film> = new Array<Film>();

  constructor(private fb: FormBuilder) {
    this.model = {
      id: 1,
      titre: 'FightClub',
      realisateur: 'David Fincher',
      duree: '2H',
      date: '1999',
      genre: 'thriller',
    };
  }

  ngOnInit() {
    this.filmsForm.patchValue(this.model);
    this.listFilm.push(this.model);
  }
  onSubmit() {
    if (this.filmsForm.valid) {
      this.model = { ...this.model!, ...this.filmsForm.value };
    }
  }
}
