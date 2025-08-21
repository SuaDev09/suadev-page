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
import { CurrentThemeService } from '@app/shared/services/current-theme/current-theme.service';

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
  private _currentThemeService = inject(CurrentThemeService);
  LOGO = '';
  fallbackUrl = 'assets/icons/account.png';
  showConfigPanel = false;
  notificationQty = 0;

  breadcrumbItems!: MenuItem[];

  home: MenuItem | undefined;

  ngOnInit(): void {
    this._currentThemeService.currentTheme$.subscribe((theme) => {
      if (theme === 'dark-theme') {
        this.LOGO = 'assets/icons/5.svg';
      } else {
        this.LOGO = 'assets/icons/6.svg';
      }
    });
  }

  imgError(event: any) {
    event.target.src = 'assets/icons/account.png';
  }
}
