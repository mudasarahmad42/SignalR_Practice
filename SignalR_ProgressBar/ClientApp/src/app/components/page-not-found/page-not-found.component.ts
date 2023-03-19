import { Component } from '@angular/core';
import { Constants } from '../../shared/constants/constants';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {
  constants: any = Constants;
}
