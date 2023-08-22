import { Component } from '@angular/core';

// Constants
import {
  H1_TITLE,
  P_CONTENT,
  SERVICES_ITEMS,
} from '../../utils/home.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  H1_TITLE = H1_TITLE;
  P_CONTENT = P_CONTENT;
  IMG_PROFILE = '../../.././assets/icons/2.svg';
  SERVICES_ITEMS = SERVICES_ITEMS;
}
