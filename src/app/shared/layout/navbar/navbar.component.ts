import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Sidebar, SidebarModule } from 'primeng/sidebar';
import { delay, filter } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { MenuItem, SharedModule } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { NgIf, NgFor } from '@angular/common';

@UntilDestroy()
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    NgFor,
    RouterLinkActive,
    SidebarModule,
    SharedModule,
    ButtonModule,
  ],
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @ViewChild(Sidebar) sidenav!: Sidebar;
  items: MenuItem[] | undefined;
  sidebarVisible: boolean = false;
  hiddenSidebar: boolean = false;
  IMG_ICON: string = '../../../../assets/icons/2.svg';

  constructor(private observer: BreakpointObserver, private router: Router) {}

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((res: any) => {
        if (res.matches) {
          this.hiddenSidebar = true;
        } else {
          this.hiddenSidebar = false;
        }
      });
  }

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
