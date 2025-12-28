import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevicesService } from '../../services/devices-service';

import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { ServerService } from '../../services/server-service';
import { _device } from '../../-interfaces/_device';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../_environments/environments';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-devicelist',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './devicelist.html',
  styleUrl: './devicelist.scss',
})
export class Devicelist {
  constructor(
    private http: HttpClient,
    protected devicesServis: DevicesService,
    protected serverservis: ServerService,
  ) {}
  socket$: WebSocketSubject<any> | undefined;

  listOfDevice: _device[] = [];

  ngOnInit() {
    this.socket$ = webSocket({ url: `${environments.apiBaseUrl}` });
    this.socket$?.next({
      type: 'AUTH',
      token: sessionStorage.getItem('token'),
    });

    const socketObs$ = this.socket$.asObservable();
    socketObs$.subscribe({
      next: (res) => {
        console.log(res.payload);
        this.listOfDevice = res.payload;
      },
      error: (err) => {
        console.log(err.error.message);
      },
    });
  }
}
