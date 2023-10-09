import { Component, OnInit } from '@angular/core';

// Constants
import {
  H1_TITLE,
  P_CONTENT,
  SERVICES_ITEMS,
} from '../utils/constants/home.constants';
import { TabViewModule } from 'primeng/tabview';
import { CommonModule, NgFor } from '@angular/common';
import { ProjectsService } from './services/projects.service';
import { Projects } from '../utils/models/projects.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [NgFor, TabViewModule, CommonModule],
  providers: [ProjectsService],
})
export class HomeComponent implements OnInit {
  H1_TITLE = H1_TITLE;
  P_CONTENT = P_CONTENT;
  IMG_PROFILE = 'assets/icons/2.svg';
  SERVICES_ITEMS = SERVICES_ITEMS;
  projects$: Observable<Projects[]> = new Observable<Projects[]>();
  constructor(private _projects: ProjectsService) {}

  ngOnInit() {
    this._projects.updateProjects([]);
    this.projects$ = this._projects.currentProjects$;
    this.projects$.subscribe((projects) => {
      console.log(projects);
    });
  }
}
