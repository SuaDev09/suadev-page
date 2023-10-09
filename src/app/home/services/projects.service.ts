import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Projects } from 'src/app/utils/models/projects.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private _projects = new BehaviorSubject<Projects[]>([]);

  currentProjects$ = this._projects.asObservable();
  constructor() {}

  updateProjects(projects: Projects[]) {
    projects = [
      {
        type: 'ANGULAR',
        projects: [
          {
            id: 1,
            name: 'suadev-page',
            description: 'This is the page you are looking at right now.',
            img: 'assets/imgs/descarga.jpg',
            link: '',
            type: 'Angular',
            tags: ['Angular', 'PrimeNG', 'HTML', 'CSS'],
          },
          {
            id: 2,
            name: 'suadev-page',
            description: 'This is the page you are looking at right now.',
            img: 'assets/imgs/descarga.jpg',
            link: '',
            type: 'Angular',
            tags: ['Angular', 'PrimeNG', 'HTML', 'CSS'],
          },
        ],
      },
      {
        type: 'ANGULAR',
        projects: [
          {
            id: 1,
            name: 'suadev-page',
            description: 'This is the page you are looking at right now.',
            img: 'assets/imgs/descarga.jpg',
            link: '',
            type: 'Angular',
            tags: ['Angular', 'PrimeNG', 'HTML', 'CSS'],
          },
          {
            id: 2,
            name: 'suadev-page',
            description: 'This is the page you are looking at right now.',
            img: 'assets/imgs/descarga.jpg',
            link: '',
            type: 'Angular',
            tags: ['Angular', 'PrimeNG', 'HTML', 'CSS'],
          },
        ],
      },
    ];
    this._projects.next(projects);
  }
}
