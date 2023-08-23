import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { PrimengModule } from '../primeng.module';

@NgModule({
  declarations: [
    HomeComponent,
    ProjectsComponent,
    BlogComponent,
    AboutComponent,
    NotFoundComponent,
    ContactComponent,
  ],
  imports: [CommonModule, PrimengModule],
  exports: [HomeComponent, ProjectsComponent, BlogComponent, AboutComponent],
})
export class ViewsModule {}
