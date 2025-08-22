import { Routes } from '@angular/router';

export const SOLUTIONS_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./solutions.component').then((m) => m.SolutionsComponent),
  },
];
