import { Component } from '@angular/core';
import {_device} from '../../-interfaces/_device';
import {DevicesService} from '../../services/devices-service';

@Component({
  selector: 'app-devicelist',
  imports: [],
  templateUrl: './devicelist.html',
  styleUrl: './devicelist.scss',
})
export class Devicelist {

  listOfDevice: _device[] | undefined;
  constructor(private devicesServis:DevicesService) {
  }
  ngOnInit() {

    this.listOfDevice=this.devicesServis?.sendListDevices()
  }
}
