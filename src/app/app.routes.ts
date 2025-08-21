import { Routes } from '@angular/router';
import { MAIN_ROUTES } from './features/main/main.routes';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('../app/features/main/main.component').then(
        (m) => m.MainComponent,
      ),
    loadChildren: () =>
      import('../app/features/main/main.routes').then((m) => m.MAIN_ROUTES),
  },
  {
    path: '**',
    loadComponent: () =>
      import('../app/features/page-not-found/page-not-found.component').then(
        (m) => m.PageNotFoundComponent,
      ),
  },
];
