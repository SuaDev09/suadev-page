import { PanelModule } from 'primeng/panel';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

// PrimeNG
import { ImageModule } from 'primeng/image';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { OverlayPanel, OverlayPanelModule } from 'primeng/overlaypanel';
import { MenuModule } from 'primeng/menu';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { SidebarModule } from 'primeng/sidebar';

// Components

// Constants
import { ThemeSwitchComponent } from '../../theme-switch/theme-switch.component';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    ImageModule,
    ButtonModule,
    BadgeModule,
    OverlayPanelModule,
    MenuModule,
    ThemeSwitchComponent,
    BreadcrumbModule,
    SidebarModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  LOGO = '';
  fallbackUrl = 'assets/icons/account.png';
  showNotificationPanel = false;
  showConfigPanel = false;
  notificationQty = 0;

  @ViewChild('notificationPanelOP') notificationPanelOP!: OverlayPanel;
  @ViewChild('configPanelOP') configPanelOP!: OverlayPanel;
  @ViewChild('menu') menu!: any;
  breadcrumbItems!: MenuItem[];

  home: MenuItem | undefined;

  ngOnInit(): void {}

  onNotificationPanelHide(value: boolean) {
    this.showNotificationPanel = value;
  }

  toggleNotifications() {
    this.showNotificationPanel = !this.showNotificationPanel;
  }

  imgError(event: any) {
    event.target.src = 'assets/icons/account.png';
  }
}
