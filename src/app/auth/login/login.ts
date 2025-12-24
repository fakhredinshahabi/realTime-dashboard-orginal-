import { Component } from '@angular/core';
import { ReactiveFormsModule, Validator, Validators } from '@angular/forms'; 
import { FormGroup,FormControl,AbstractControl } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { strongPassword } from '../../_validators/strongPaswword';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  constructor(){

  }
getcontrolsLogin(name:string):AbstractControl | null{
return this.loginForm.get(name)
}

  loginForm= new FormGroup({
    "userName":new FormControl('',[Validators.required,Validators.pattern("[a-zA-Z ]*")]),
    "password" : new FormControl('',[Validators.required,strongPassword()])
  });
  login(){
    if(this.loginForm.valid){
    const user ={
      name:this.getcontrolsLogin('userName')?.value,
      password:this.getcontrolsLogin('password')?.value
    }

    }else{
      this.loginForm.markAllAsTouched()
    }
  }















}

