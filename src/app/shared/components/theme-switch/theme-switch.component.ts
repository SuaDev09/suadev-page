import { DOCUMENT } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrentThemeService } from '@app/shared/services/current-theme/current-theme.service';
import { SelectButtonModule } from 'primeng/selectbutton';

@Component({
  selector: 'app-theme-switch',
  standalone: true,
  imports: [FormsModule, SelectButtonModule],
  templateUrl: './theme-switch.component.html',
  styleUrl: './theme-switch.component.css',
})
export class ThemeSwitchComponent {
  themeSelected = 'light';

  themeOptions: any[] = [
    { icon: 'pi pi-sun', theme: 'light' },
    { icon: 'pi pi-moon', theme: 'dark' },
  ];
  #document = inject(DOCUMENT);
  private _currentThemeService = inject(CurrentThemeService);

  isDarkMode = false;
  constructor() {
    if (this.isSystemDark()) {
      this.toggleLightDark();
    }
  }

  toggleLightDark() {
    const linkElement = this.#document.getElementById(
      'app-theme',
    ) as HTMLLinkElement;
    if (linkElement.href.includes('dark')) {
      linkElement.href = 'theme-light.css';

      this.isDarkMode = false;
      this._currentThemeService.setCurrentTheme('light-theme');
    } else {
      linkElement.href = 'theme-dark.css';
      this._currentThemeService.setCurrentTheme('dark-theme');
      this.isDarkMode = true;
    }
  }

  isSystemDark(): boolean {
    return window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches;
  }
}
