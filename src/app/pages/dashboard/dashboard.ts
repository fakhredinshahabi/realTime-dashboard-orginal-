import { Component } from '@angular/core';
import {Headr} from '../../layout/headr/headr';
import {Main} from '../../layout/main/main';
import {Sidebar} from '../../layout/sidebar/sidebar';

@Component({
  selector: 'app-dashboard',
  imports: [
    Headr,
    Main,
    Sidebar
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {

}
