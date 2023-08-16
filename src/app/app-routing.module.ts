import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';

// Import the Views
import { HomeComponent } from './views/home/home.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { BlogComponent } from './views/blog/blog.component';
import { AboutComponent } from './views/about/about.component';
const routes: Routes = [
  {
    // Path to the home page
    path: '',
    children: [
      {
        // Path to the home page
        path: '',
        component: HomeComponent,
      },
      {
        // Path to the Projects page
        path: 'Projects',
        component: ProjectsComponent,
      },
      {
        // Path to the Blog page
        path: 'Blog',
        component: BlogComponent,
      },
      {
        // Path to the About page
        path: 'About',
        component: AboutComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
