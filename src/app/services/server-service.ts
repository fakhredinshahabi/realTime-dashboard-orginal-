import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable } from 'rxjs';
import { _device } from '../-interfaces/_device';
import { environments } from '../_environments/environments';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  private socketForDevice: WebSocketSubject<_device>;
  constructor() {
    const token = sessionStorage.getItem('token');
    this.socketForDevice = webSocket({ url: `${environments.apiBaseUrl}` });
  }

  getMessages(): Observable<any> {
    return this.socketForDevice.asObservable();
  }
}
