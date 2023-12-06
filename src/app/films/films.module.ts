import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsListComponent } from './films-list/films-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilmService } from './films-list/film.service';
import { BoldDirective } from './films-list/bold.directive';

@NgModule({
  declarations: [FilmsListComponent, BoldDirective],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FilmsListComponent, BoldDirective],
  providers: [FilmService],
})
export class FilmsModule {}
