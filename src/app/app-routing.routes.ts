import { Route } from '@angular/router';

// Import the Views
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
export const routes: Route[] = [
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
