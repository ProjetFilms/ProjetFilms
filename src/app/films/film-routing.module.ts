import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsListComponent } from './films-list/films-list.component';
import { FilmDisplayComponent } from './film-display/film-display.component';
//import { PageNotFoundComponent } from './404.component';

const routes: Routes = [
  { path: 'film/edit/:id', component: FilmDisplayComponent },
  { path: 'film/list', component: FilmsListComponent },
  { path: '', redirectTo: 'film/list', pathMatch: 'full' },
  //{ path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
