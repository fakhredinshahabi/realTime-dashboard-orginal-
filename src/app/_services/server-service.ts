import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { _responseRigesterUser, _user, _userLogin, _responseLoginUser } from '../-interfaces/_user';
import { environments } from '../_environments/environments';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { _devices, _device, _getDeviceMessage } from '../-interfaces/_device';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  private getDeviceSocket$!: WebSocketSubject<_devices[]>;
  private message = new Subject<_getDeviceMessage>();
  constructor(private http: HttpClient) {}

  getDeviceSocket() {
    this.getDeviceSocket$ = webSocket<_devices[]>({
      url: `${environments.apiBaseUrl}`,
      serializer: (msg) => {
        return JSON.stringify(msg);
      },
      deserializer: (e) => JSON.parse(e.data) as _devices[],
    });
    this.message.subscribe((msg) => this.getDeviceSocket$.next(msg as any));
  }
  hasgetDeviceSocket() {
    if (!this.getDeviceSocket$!) {
      this.getDeviceSocket();
    }
  }
  sendMessage(message: _getDeviceMessage) {
    this.hasgetDeviceSocket();
    this.message.next(message);
  }

  getDeviseObs(): Observable<_devices[]> {
    this.hasgetDeviceSocket();
    return this.getDeviceSocket$.asObservable();
  }
}
