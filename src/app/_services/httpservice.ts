import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { _responseRigesterUser, _user, _userLogin, _responseLoginUser } from '../-interfaces/_user';
import { environments } from '../_environments/environments';
import { _devices, _device, _getDeviceMessage } from '../-interfaces/_device';

@Injectable({
  providedIn: 'root',
})
export class Httpservice {
  constructor(private http: HttpClient) {}

  registerUser(user: _user) {
    return this.http.post<_responseRigesterUser>(
      `${environments.apiBaseUrl}${environments.api.register}`,
      user,
    );
  }
  loginUser(user: _userLogin) {
    return this.http.post<_responseLoginUser>(
      `${environments.apiBaseUrl}${environments.api.login}`,
      user,
    );
  }
  checkEmail(email: string) {
    return this.http.get(
      `${environments.apiBaseUrl}${environments.api.checkUser}?email=${encodeURIComponent(email)}`,
    );
  }

  getUserProfile() {
    return this.http.get(`${environments.apiBaseUrl}${environments.api.profile}`);
  }
}
