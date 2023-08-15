import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
})
export class MenubarComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Projects',
        icon: 'pi pi-fw pi-power-off',
      },
      {
        label: 'Dashboard',
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
