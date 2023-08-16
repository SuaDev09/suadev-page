import { Component } from '@angular/core';

// Constants
import { H1_TITLE, P_CONTENT } from '../../utils/home.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  H1_TITLE = H1_TITLE;
  P_CONTENT = P_CONTENT;
}
