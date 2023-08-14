import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import the Views
import { HomeComponent } from './views/home/home.component';
const routes: Routes = [
  {
    // Path to the home page
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
