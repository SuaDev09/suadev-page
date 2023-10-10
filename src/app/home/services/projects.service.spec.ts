import { TestBed } from '@angular/core/testing';
import { ProjectsService } from './projects.service';

describe('ProjectsService', () => {
  let service: ProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsService);
  });

  it('should be created', () => {
    console.log('Prueba: should be created');
    expect(service).toBeTruthy();
  });

  it('should update projects', () => {
    const newProjects = [
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

    service.updateProjects(newProjects);

    service.currentProjects$.subscribe((projects) => {
      const errorMessage = 'Los proyectos no se actualizaron correctamente';
      console.log('Resultado actual:', projects);
      console.log('Resultado esperado:', newProjects);
      expect(projects).toEqual(newProjects, errorMessage);
    });
  });
});
