import { Component, OnInit } from '@angular/core';

// Constants
import {
  H1_TITLE,
  P_CONTENT,
  SERVICES_ITEMS,
} from '../utils/constants/home.constants';
import { TimelineModule } from 'primeng/timeline';
import { CommonModule, NgFor } from '@angular/common';
import { ProjectsService } from './services/projects.service';
import { CardModule } from 'primeng/card';
import { TimelineComponent } from '../shared/timeline/timeline.component';
import { ListProjectComponent } from '../shared/list-project/list-project.component';

interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    NgFor,
    CommonModule,
    TimelineModule,
    CardModule,
    TimelineComponent,
    ListProjectComponent,
  ],
  providers: [ProjectsService],
})
export class HomeComponent implements OnInit {
  H1_TITLE = H1_TITLE;
  P_CONTENT = P_CONTENT;
  IMG_PROFILE = 'assets/icons/2.svg';
  SERVICES_ITEMS = SERVICES_ITEMS;

  constructor(private _projects: ProjectsService) {}

  ngOnInit() {}
}
