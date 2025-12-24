import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  Validators,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { strongPassword } from '../../_validators/strongPaswword';
import { checkRePassword } from '../../_validators/_matchPassword';
import { conecktChek } from '../../_validators/_conectcheck';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { _user } from '../../-interfaces/_user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterModule, HttpClientModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  hasEror = strongPassword();
  constructor(private http: HttpClient) {}
  registerForm = new FormGroup(
    {
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      lastName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
      userName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9 ]*')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, strongPassword()]),
      repassword: new FormControl('', []),
    },
    { validators: [checkRePassword, conecktChek] },
  );

  getcontrols(name: string): AbstractControl | null {
    return this.registerForm.get(name);
  }
  login() {
    console.log(this.registerForm?.errors?.['missMatch']);
    console.log(this.registerForm?.errors?.['notValid']);
    if (this.registerForm.valid) {
      const user: _user = {
        name: this.getcontrols('name')?.value,
        lastname: this.getcontrols('lastName')?.value,

        phoneNumber: this.getcontrols('phonNumber')?.value,
        email: this.getcontrols('email')?.value,
        password: this.getcontrols('password')?.value,
        rePassword: this.getcontrols('repassword')?.value,
      };
      this.http.post<_user>('http://localhost:3000/users', user).subscribe();
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
