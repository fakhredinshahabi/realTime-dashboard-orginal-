import { Component } from '@angular/core';
import { Login } from '../login/login';
import { Register } from '../register/register';
import { RouterModule } from "@angular/router";


@Component({
  selector: 'app-auth',
  imports: [ RouterModule],
  templateUrl: './auth.html',
  styleUrl: './auth.scss',
})
export class Auth {
  islogin:boolean=false;
  changemood(){
    this.islogin=!this.islogin
  }
}
