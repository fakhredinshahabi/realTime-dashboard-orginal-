import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { strongPassword } from '../../_validators/strongPaswword';
import { checkRePassword } from '../../_validators/_matchPassword';
import { _user } from '../../-interfaces/_user';
import { CommonModule } from '@angular/common';
import { Httpservice } from '../../_services/httpservice';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  Loading: boolean = false;
  constructor(
    private http: Httpservice,
    private router: Router,
  ) {}
  registerForm = new FormGroup(
    {
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      lastName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      userName: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_]{3,20}$'),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, strongPassword()]),
      repassword: new FormControl('', [Validators.required]),
    },
    { validators: [checkRePassword] },
  );

  getcontrols(name: string): AbstractControl | null {
    return this.registerForm.get(name);
  }
  onSubmit() {
    if (this.registerForm.valid) {
      const user: _user = {
        name: this.getcontrols('name')?.value,
        lastName: this.getcontrols('lastName')?.value,
        userName: this.getcontrols('userName')?.value,
        email: this.getcontrols('email')?.value,
        password: this.getcontrols('password')?.value,
      };
      this.http.registerUser(user).subscribe({
        next: (response) => {
          if (response?.user?.userName) {
            localStorage.setItem('userName', response.user.userName);
          }
          if (response.success) {
            alert(response.message);
            this.Loading = true;
            setTimeout(() => {
              this.router.navigate(['/auth/login']);
            }, 2000);
          }
        },
        error: (error) => {
          alert('خطا: ' + (error.error?.message || 'خطای ناشناخته'));
        },
        complete: () => {},
      });
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
