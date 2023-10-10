import { Component, OnInit } from '@angular/core';

// Constants
import {
  H1_TITLE,
  P_CONTENT,
  SERVICES_ITEMS,
} from '../utils/constants/home.constants';
import { TabViewModule } from 'primeng/tabview';
import { TimelineModule } from 'primeng/timeline';
import { CommonModule, NgFor } from '@angular/common';
import { ProjectsService } from './services/projects.service';
import { Projects } from '../utils/models/projects.model';
import { Observable } from 'rxjs';
import { CardModule } from 'primeng/card';

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
  imports: [NgFor, TabViewModule, CommonModule, TimelineModule, CardModule],
  providers: [ProjectsService],
})
export class HomeComponent implements OnInit {
  H1_TITLE = H1_TITLE;
  P_CONTENT = P_CONTENT;
  IMG_PROFILE = 'assets/icons/2.svg';
  SERVICES_ITEMS = SERVICES_ITEMS;
  projects$: Observable<Projects[]> = new Observable<Projects[]>();
  events: EventItem[];

  constructor(private _projects: ProjectsService) {
    this.events = [
      {
        status: 'Ordered',
        date: '15/10/2020 10:30',
        icon: 'pi pi-shopping-cart',
        color: '#9C27B0',
        image: 'game-controller.jpg',
      },
      {
        status: 'Processing',
        date: '15/10/2020 14:00',
        icon: 'pi pi-cog',
        color: '#673AB7',
      },
      {
        status: 'Shipped',
        date: '15/10/2020 16:15',
        icon: 'pi pi-shopping-cart',
        color: '#FF9800',
      },
      {
        status: 'Delivered',
        date: '16/10/2020 10:00',
        icon: 'pi pi-check',
        color: '#607D8B',
      },
    ];
  }

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
