import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    standalone: true,
    imports: [NgFor],
})
export class FooterComponent {
  items = [
    {
      link: '',
      icon: 'pi pi-linkedin',
    },
    {
      link: '',
      icon: 'pi pi-github',
    },
  ];
}
