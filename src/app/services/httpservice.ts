import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { _response, _user, _loginRequest, _loginResponse } from '../-interfaces/_user';
import { environments } from '../_environments/environments';
import { Headr } from '../layout/headr/headr';
@Injectable({
  providedIn: 'root',
})
export class Httpservice {
  constructor(private http: HttpClient) {}
  getUserProfile() {
    return this.http.get(`${environments.apiBaseUrl}${environments.api.profile}`);
  }
  addUser(user: _user) {
    return this.http.post<_response>(
      `${environments.apiBaseUrl}${environments.api.register}`,
      user,
    );
  }
  loginUser(user: _loginRequest) {
    return this.http.post<_loginResponse>(
      `${environments.apiBaseUrl}${environments.api.login}`,
      user,
    );
  }
}
