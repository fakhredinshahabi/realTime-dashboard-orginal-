import { Component } from '@angular/core';
import { ReactiveFormsModule, Validator, Validators } from '@angular/forms';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { strongPassword } from '../../_validators/strongPaswword';
import { HttpClient } from '@angular/common/http';
import { Httpservice } from '../../services/httpservice';
import { _response, _loginRequest } from '../../-interfaces/_user';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  constructor(
    private http: Httpservice,
    private router: Router,
  ) {}
  username: string | null = '';
  loginForm!: FormGroup;
  getcontrolsLogin(name: string): AbstractControl | null {
    return this.loginForm.get(name);
  }
  ngOnInit() {
    this.username = localStorage.getItem('userName');
    this.loginForm = new FormGroup({
      userName: new FormControl(this.username, [
        Validators.required,
        Validators.pattern('[a-zA-Z ]*'),
      ]),
      password: new FormControl('', [Validators.required, strongPassword()]),
    });
  }

  login() {
    const user: _loginRequest = {
      userName: this.getcontrolsLogin('userName')?.value,
      password: this.getcontrolsLogin('password')?.value,
    };
    this.http.loginUser(user).subscribe({
      next: (res) => {
        alert('وارد شدید');
        sessionStorage.setItem('token', res.token);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        alert(err.error.message);
      },
      complete: () => {},
    });
  }
}
