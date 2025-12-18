import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DevicesService} from '../../services/devices-service';

import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import {ServerService} from '../../services/server-service';
import {_device} from '../../-interfaces/_device';

@Component({
  selector: 'app-devicelist',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './devicelist.html',
  styleUrl: './devicelist.scss',
})
export class Devicelist {

  socket$: WebSocketSubject<any> | undefined;
listOfDevice:_device[]=[]
  constructor(protected devicesServis: DevicesService,protected serverservis:ServerService) {
  }

  ngOnInit() {
this.serverservis.getMessages().subscribe((device)=>{
this.listOfDevice=device.payload
  console.log(device.payload)
})
  }
}
