import { Component } from '@angular/core';
import {Devicelist} from '../../pages/devicelist/devicelist';


@Component({
  selector: 'app-main',
  imports: [Devicelist],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {

}
