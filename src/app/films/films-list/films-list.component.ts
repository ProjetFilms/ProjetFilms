import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Film } from '../films.model';
import { Subscription } from 'rxjs';
import { OnlineStatusService } from '../../../online-status.service';
import { Observable, liveQuery } from 'dexie';
import { db } from '../../../indexed.db';
import { FilmService } from '../film.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrl: './films-list.component.css',
})
export class FilmsListComponent implements OnInit {
  filmSubscribe!: Subscription;
  isOnline: boolean = true;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private filmService: FilmService,
    private onlineStatusService: OnlineStatusService
  ) {}

  filmArray: Array<Film> = new Array<Film>();
  currentFilm: Film | undefined | null;

  listFilms: Observable<Array<Film>> = liveQuery(() => this.listAllFilms());

  ngOnDestroy(): void {
    if (this.filmSubscribe) {
      this.filmSubscribe.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.filmService.getAllFilms().subscribe((films) => {
      this.filmArray = films;
    });

    if (!this.filmSubscribe) {
      this.filmSubscribe = this.onlineStatusService.connectionChanged.subscribe(
        (isOnline) => {
          if (isOnline) {
            this.isOnline = true;
          } else {
            this.isOnline = false;
          }
        }
      );
    }
  }

  model!: Film;

  async listAllFilms(): Promise<Array<Film>> {
    return await db.films.where({}).toArray();
  }

  async addItem(film: Film) {
    await db.films.add({ ...film });
  }

  setCurrentFilm(film: Film) {
    this.currentFilm = null;
    setTimeout(() => {
      this.currentFilm = film;
    }, 10);
  }

  updateList(film: Film) {
    let indexItem: number = this.filmArray.findIndex((h) => h.id === film.id);
    this.filmArray[indexItem] = { ...this.filmArray[indexItem], ...film };
  }

  profileForm = this.fb.group(
    {
      titre: ['FightClub', [Validators.required, Validators.minLength(4)]],
      realisateur: [''],
      duree: [''],
      date: [''],
      genre: [''],
    },
    { updateOn: 'onSubmit' }
  );
  data: {
    titre: string;
    realisateur: string;
    duree: string;
    date: string;
    genre: string;
  } = {
    titre: 'FightClub',
    realisateur: 'David Fincher',
    duree: '2H',
    date: '1999',
    genre: 'thriller',
  };
}
