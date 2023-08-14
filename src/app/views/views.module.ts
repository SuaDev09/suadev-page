import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [HomeComponent, ProjectsComponent],
  imports: [CommonModule, ComponentsModule],
  exports: [HomeComponent, ProjectsComponent],
})
export class ViewsModule {}
