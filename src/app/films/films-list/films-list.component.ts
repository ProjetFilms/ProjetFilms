import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Film } from '../films.model';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrl: './films-list.component.css',
})
export class FilmsListComponent implements OnInit {
  listFilms: Array<Film> = new Array<Film>();
  profileForm = this.fb.group({
    Name: ['FightClub', [Validators.required, Validators.minLength(4)]],
    Real: [''],
      duree: [''],
      date: [''],
      genre: [''],
    });
  data: {
    Name: string;
    Real: string;
    duree: string;
    date: string;
    genre: string;
  } = {
    Name: 'FightClub',
    Real: 'David Fincher',
      duree: '2H',
      date: '1999',
      genre: 'thriller',
    };
  }

  ngOnInit() {
    this.profileForm.patchValue(this.data);
    this.listFilms.push(new Film("Avenger"))
    this.listFilms.push(new Film("zdaha"))
  }
}
