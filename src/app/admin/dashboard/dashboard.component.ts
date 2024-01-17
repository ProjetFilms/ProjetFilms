import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Film } from '../../films/films.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  filmArray: Array<Film> = new Array<Film>();
  currentFilm: Film | undefined | null;

  ngOnInit(): void {
    this.filmArray.push(new Film(1, 'Avenger'));
    this.filmArray.push(new Film(2, 'zdaha'));
  }

  setCurrentFilm(film: Film) {
    this.currentFilm = null;
    setTimeout(() => {
      this.currentFilm = film;
    }, 10);
  }
}
