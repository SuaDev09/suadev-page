import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
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
