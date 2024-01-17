import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListFilmsComponent } from './list-films/list-films.component';
import { EditFilmsComponent } from './edit-films/edit-films.component';

const routes: Routes = [
  { path: 'admin/edit-films/:id', component: EditFilmsComponent },
  { path: 'admin/list-films', component: ListFilmsComponent },
  { path: 'admin/dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
