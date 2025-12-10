import { Component } from '@angular/core';

import {Headr} from './layout/headr/headr';
import {Footer} from './layout/footer/footer';
import {Sidebar} from './layout/sidebar/sidebar';
import {Main} from './layout/main/main';

@Component({
  selector: 'app-root',
  imports: [Headr, Sidebar, Main],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
