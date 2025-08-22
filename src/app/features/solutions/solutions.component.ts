import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@app/shared/components/layout/header/header.component';
import { SidebarComponent } from '@app/shared/components/layout/sidebar/sidebar.component';
@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent, RouterOutlet],

  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.css',
})
export class SolutionsComponent {}
