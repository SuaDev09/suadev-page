import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ComponentsModule } from '../components/components.module';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProjectsComponent,
    BlogComponent,
    AboutComponent,
  ],
  imports: [CommonModule, ComponentsModule],
  exports: [HomeComponent, ProjectsComponent, BlogComponent, AboutComponent],
})
export class ViewsModule {}
