import { Component } from '@angular/core';
import {DevicesService} from './services/devices-service';
import {RouterModule} from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
constructor(private deviceService: DevicesService) {
}
ngOnInit() {
  this.deviceService.sendListDevices()
}

}
