import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('../app/app.component').then((m) => m.AppComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('../app/features/page-not-found/page-not-found.component').then(
        (m) => m.PageNotFoundComponent,
      ),
  },
];
