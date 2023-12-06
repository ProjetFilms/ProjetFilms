import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Film } from '../films.model';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrl: './films-list.component.css',
})
export class FilmsListComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  filmArray: Array<Film> = new Array<Film>();
  currentFilm: Film | undefined | null;

  ngOnInit(): void {
    this.profileForm.patchValue(this.data);
    this.filmArray.push(new Film(1, 'Avenger'));
    this.filmArray.push(new Film(2, 'zdaha'));
  }
  model!: Film;

  // onSubmit() {
  //   if (this.profileForm.valid) {
  //     this.model = { ...this.model!, ...this.profileForm.value };
  //   }
  // }

  setCurrentFilm(film: Film) {
    this.currentFilm = null;
    setTimeout(() => {
      this.currentFilm = film;
    }, 10);
  }

  updateList(film: Film) {
    debugger;
    let indexItem: number = this.filmArray.findIndex(h => h.id === film.id);
    this.filmArray[indexItem] = {...this.filmArray[indexItem], ...film};
  }

  profileForm = this.fb.group(
    {
      titre: ['FightClub', [Validators.required, Validators.minLength(4)]],
      real: [''],
      duree: [''],
      date: [''],
      genre: [''],
    },
    { updateOn: 'onSubmit' }
  );
  data: {
    titre: string;
    real: string;
    duree: string;
    date: string;
    genre: string;
  } = {
    titre: 'FightClub',
    real: 'David Fincher',
    duree: '2H',
    date: '1999',
    genre: 'thriller',
  };
}
