import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsListComponent } from './films/films-list/films-list.component';
import { FilmDisplayComponent } from './films/film-display/film-display.component';
//import { PageNotFoundComponent } from './404.component';

const routes: Routes = [{ path: '', component: FilmDisplayComponent }];
