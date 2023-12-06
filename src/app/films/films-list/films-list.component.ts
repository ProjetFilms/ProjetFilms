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
  ngOnInit(): void {
    this.profileForm.patchValue(this.data);
    this.listFilms.push(new Film(1, 'Avenger'));
    this.listFilms.push(new Film(2, 'zdaha'));
  }
  model!: Film;

  onSubmit() {
    if (this.profileForm.valid) {
      this.model = { ...this.model!, ...this.profileForm.value };
    }
  }

  listFilms: Array<Film> = new Array<Film>();
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
