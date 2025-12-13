import { Component } from '@angular/core';
import {Devicelist} from '../../pages/devicelist/devicelist';
import {_device} from '../../-interfaces/_device';
import {DevicesService} from '../../services/devices-service';



@Component({
  selector: 'app-main',
  imports: [Devicelist],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {
  listOfDevice: _device[]=[];
  onlineDeviceNumber: number = 0;
  offlineDeviceNumber: number = 0;
  warningDeviceNumber: number = 0;
constructor(private deviceService: DevicesService) {
}
ngOnInit() {
  this.listOfDevice=this.deviceService.sendListDevices();
  this.onlineDeviceNumber = (this.listOfDevice.filter(device => device.status == "online")).length;
  this.offlineDeviceNumber = (this.listOfDevice.filter(device => device.status == "offline")).length;
  this.warningDeviceNumber = (this.listOfDevice.filter(device => device.status == "warning")).length;
}
}


