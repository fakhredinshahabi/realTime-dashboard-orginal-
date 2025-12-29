import { Component } from '@angular/core';
import { Httpservice } from '../../_services/httpservice';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../_environments/environments';
import { _user } from '../../-interfaces/_user';
interface _profile {
  success: boolean;
  user?: _user;
}
@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './headr.html',
  styleUrl: './headr.scss',
})
export class Headr {
  constructor(
    private http: Httpservice,
    private hettp2: HttpClient,
  ) {}
  name: string = '';
  lastName: string = '';
  userName: string = '';
  email: string = '';

  openDialog() {
    const dialog = document.querySelector('dialog');
    dialog?.showModal();
    const header = { Authorization: 'Bearer ' + sessionStorage.getItem('token') };
    this.hettp2
      .get<_profile>(`${environments.apiBaseUrl}${environments.api.profile}`, { headers: header })
      .subscribe({
        next: (res) => {
          if (res.user) {
            this.name = res.user.name;
            this.lastName = res.user.lastName;
            this.email = res.user.email;
            this.userName = res.user.userName;
          }
        },
      });
  }
}
