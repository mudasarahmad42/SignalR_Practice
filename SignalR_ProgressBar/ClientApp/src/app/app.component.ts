import { Component } from '@angular/core';
import { Constants } from './shared/constants/constants';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constants: any = Constants;

  // Form Control
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
}
