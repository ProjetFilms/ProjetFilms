import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'film',
    loadChildren: () =>
      import('./films/films.module').then((m) => m.FilmsModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
];
