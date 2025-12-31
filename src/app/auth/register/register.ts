import { Component, NgModule } from '@angular/core';
import { NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { strongPassword } from '../../_validators/strongPaswword';
import { checkRePassword } from '../../_validators/_matchPassword';
import { _user } from '../../-interfaces/_user';
import { CommonModule } from '@angular/common';
import { Httpservice } from '../../_services/httpService';
import { strongPasswordCheck } from '../../_validators/_strongPassword';
import { EmailValidator } from '../../_validators/_checkEmail';
import { UserValidator } from '../../_validators/_checkUser';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
})
export class Register {
  // Loading: boolean = false;
  constructor(
    private http: Httpservice,
    private router: Router,
    private emailValidator: EmailValidator,
    private userValidator: UserValidator,
  ) {}

  registerForm!: FormGroup;
  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      userName: new FormControl(
        '',
        [Validators.required],
        [this.userValidator.checkRealTimeUser()],
      ),
      email: new FormControl('', [Validators.required], [this.emailValidator.checkRealTimeEmail()]),
      password: new FormControl('', [strongPasswordCheck()]),
    });
  }
  registerUser() {
    if (this.registerForm.valid) {
      const user: _user = {
        name: this.getcontrolsRigesterForm('name')?.value,
        lastName: this.getcontrolsRigesterForm('lastName')?.value,
        userName: this.getcontrolsRigesterForm('userName')?.value,
        email: this.getcontrolsRigesterForm('email')?.value,
        password: this.getcontrolsRigesterForm('password')?.value,
      };
      this.http.registerUser(user).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/auth/login']);
        },
        error: (msg) => {
          alert(msg.error.message || 'خطای ناشناخته');
        },
        complete: () => {},
      });
    }
  }
  getcontrolsRigesterForm(name: string) {
    return this.registerForm.get(name);
  }
}
