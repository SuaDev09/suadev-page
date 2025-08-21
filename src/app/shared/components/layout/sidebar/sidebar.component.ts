import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

// PrimeNG Modules
import { MenuModule } from 'primeng/menu';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { DialogService } from 'primeng/dynamicdialog';
import { MenuItem } from 'primeng/api';

// Components
import { SideNavbarComponent } from '../side-navbar/side-navbar.component';

// Services

// Models

interface SubMenuList {
  icon: string;
  title: string;
  route: string;
  hasChild: boolean;
  children: SubMenuList[];
}
// Models
// Servic
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    SideNavbarComponent,
    MenuModule,
    AvatarModule,
    ButtonModule,
    RouterLink,
  ],
  providers: [DialogService],
})
export class SidebarComponent implements OnInit {
  private _dialogService = inject(DialogService);
  private _router = inject(Router);
  mobileQuery!: MediaQueryList;
  // compressorName: string = '';
  hasExpanded = false;
  itemClicked: SubMenuList | null = null;

  items: MenuItem[] | undefined;
  fallbackUrl = 'assets/icons/account.png';
  ngOnInit() {
    this.items = [
      {
        label: 'Menu',
        items: [
          // {
          //   label: 'Overview',
          //   icon: 'pi pi-th-large',
          //   shortcut: '⌘+N',
          //   routerLink: '/overview',
          // },
          {
            label: 'Projects',
            icon: 'pi pi-folder',
            shortcut: '⌘+S',
            routerLink: '/projects',
            separator: false,
          },
          {
            label: 'Users',
            icon: 'pi pi-users',
            routerLink: '/users',
            separator: false,
          },
        ],
      },
      {
        label: 'Profile',
        items: [
          {
            label: 'Settings',
            icon: 'pi pi-cog',
            shortcut: '⌘+O',
          },
          {
            label: 'Messages',
            icon: 'pi pi-inbox',
            badge: '2',
          },
        ],
      },
    ];
  }

  openNewRequestType() {
    this._router.navigate(['/projects/new-project']);

    // this._dialogService.open(NewRequestTypeComponent, {
    //   header: 'Create a new phase for a existing project',
    //   width: '25%',
    // });
  }

  imgError(event: any) {
    event.target.src = 'assets/icons/account.png';
  }

  clooseSidebar() {
    this.hasExpanded = !this.hasExpanded;
  }
}
