import {Injectable} from '@angular/core';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import {Observable} from 'rxjs';
import {_device} from '../-interfaces/_device';
@Injectable({
  providedIn: 'root',
})
export class ServerService {
private socketForDevice :WebSocketSubject<_device>;
constructor() {
  this.socketForDevice = webSocket({url: 'ws://localhost:8080',});

}

  getMessages(): Observable<any> {
    return this.socketForDevice.asObservable();
  }

}
