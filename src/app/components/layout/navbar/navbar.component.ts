import { Component, OnInit, ViewChild, AfterViewInit  } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Sidebar  } from 'primeng/sidebar';
import { delay, filter } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@UntilDestroy()
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @ViewChild(Sidebar)
  sidenav!: Sidebar;
  items: MenuItem[] | undefined;
  sidebarVisible: boolean = false;

  constructor(private observer: BreakpointObserver, private router: Router) {}

  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((res: any) => {
        console.log(res)
        if (res.matches) {
          this.sidenav.modal = false;
          this.sidenav.visible = false;
        } else {
          this.sidenav.modal = true;
          this.sidenav.visible = true;
        }
      });

      this.router.events
      .pipe(
        untilDestroyed(this),
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav.modal === false) {
          this.sidenav.visible = false;
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
