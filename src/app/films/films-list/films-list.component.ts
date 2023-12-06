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

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.profileForm.patchValue(this.data);
    this.listFilms.push(new Film("Avenger", "Joss Whedon", "2h23", "2012", "Action"))
    this.listFilms.push(new Film("Iron man", "Jon Favreau", "2h06", "2008", "Action"))
    this.listFilms.push(new Film("Oppenheimer", "Christopher Nolan", "3h00", "2023", "Drame Biographique"))

  }
}
