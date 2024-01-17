import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsListComponent } from './films-list/films-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilmService } from './film.service';
import { BoldDirective } from './bold.directive';
import { FilmDisplayComponent } from './film-display/film-display.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FilmsListComponent, FilmDisplayComponent, BoldDirective],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [FilmsListComponent, FilmDisplayComponent, BoldDirective],
  providers: [FilmService],
})
export class FilmsModule {}
