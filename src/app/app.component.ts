import { Component, HostListener, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { SidebarComponent } from './shared/components/layout/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/layout/header/header.component';

import { WindowService } from './shared/services/window/window.service';

import { ENVIRONMENT } from '@env/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ToastModule,
    HeaderComponent,
    SidebarComponent,
  ],
  providers: [MessageService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private _windowService = inject(WindowService);
  private _titleService = inject(Title);

  constructor() {
    this._titleService.setTitle(ENVIRONMENT.APP_NAME);
  }

  async ngOnInit(): Promise<void> {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this._windowService.updateWindowHeight(event.target.innerHeight);
  }
}
