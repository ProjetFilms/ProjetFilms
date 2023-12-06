import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsListComponent } from './films-list/films-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilmService } from './films-list/film.service';

@NgModule({
  declarations: [FilmsListComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FilmsListComponent],
  providers: [FilmService],
})
export class FilmsModule {}
