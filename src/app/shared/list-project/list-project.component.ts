import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsService } from 'src/app/home/services/projects.service';
import { Observable } from 'rxjs';
import { Projects } from 'src/app/utils/models/projects.model';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'list-project',
  standalone: true,
  imports: [CommonModule, TabViewModule],
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css'],
  providers: [ProjectsService],
})
export class ListProjectComponent implements OnInit {
  projects$: Observable<Projects[]> = new Observable<Projects[]>();

  constructor(private _projects: ProjectsService) {}

  ngOnInit() {
    this._projects.updateProjects([]);

    this.projects$ = this._projects.currentProjects$;
    this.projects$.subscribe((projects) => {
      console.log(projects);
    });
  }

  activatePanel(i: number) {
    console.log(i);
  }
}
