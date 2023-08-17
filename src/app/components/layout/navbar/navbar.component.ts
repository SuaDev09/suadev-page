import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Projects',
        icon: 'pi pi-fw pi-power-off',
      },
      {
        label: 'Blog',
        icon: 'pi pi-fw pi-power-off',
      },
      {
        label: 'About',
        icon: 'pi pi-fw pi-power-off',
      },
    ];
  }
}
