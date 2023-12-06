import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsListComponent } from './films-list/films-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FilmsListComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FilmsListComponent],
})
export class FilmsModule {}
