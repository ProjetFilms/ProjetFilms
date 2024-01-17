import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsListComponent } from './films-list/films-list.component';
import { FilmDisplayComponent } from './film-display/film-display.component';
//import { PageNotFoundComponent } from './404.component';

const routes: Routes = [
  { path: 'edit/:id', component: FilmDisplayComponent },
  { path: 'list', component: FilmsListComponent },
  //{ path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmRoutingModule {}
