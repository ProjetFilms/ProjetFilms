import { from, Observable, of } from 'rxjs';
import { delay, concatMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Film } from './films.model';

@Injectable()
export class FilmService {
  mockFilmList: Array<Film> = [
    new Film(
      1,
      'Oppenheimer',
      'Christopher Nolan',
      '3h00',
      '2023',
      'Drame Biographique'
    ),
  ];
  getAllHeroes(): Observable<Array<Film>> {
    return of(this.mockFilmList).pipe(delay(1000));
  }
  rotateAllHeroes(): Observable<Film> {
    return from(this.mockFilmList).pipe(
      concatMap((item) => of(item).pipe(delay(5000)))
    );
  }
}
