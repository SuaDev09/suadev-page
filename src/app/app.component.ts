// Angular Imports
import { Component, OnInit } from '@angular/core';

// PrimeNG Imports
import { PrimeNGConfig } from 'primeng/api';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { NavbarComponent } from './shared/layout/navbar/navbar.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NavbarComponent],
})
export class AppComponent implements OnInit {
  title = 'suadev-page';

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    // Set the optional Ripple Effect for the PrimeNG components
    this.primengConfig.ripple = true;

    // Set the z-index for the PrimeNG components
    this.primengConfig.zIndex = {
      modal: 1100, // dialog, sidebar
      overlay: 1000, // dropdown, overlaypanel
      menu: 1000, // overlay menus
      tooltip: 1100, // tooltip
    };

    // Set the translations for the dialog buttons
    this.primengConfig.setTranslation({
      accept: 'Accept',
      reject: 'Cancel',

      //translations
    });
  }
}
