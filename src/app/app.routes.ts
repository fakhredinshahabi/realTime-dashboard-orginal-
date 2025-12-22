import { Routes } from '@angular/router';
import {Dashboard} from './pages/dashboard/dashboard';
import {Login} from './auth/login/login';

export const routes: Routes = [
  {path:'home',component:Dashboard},
  {path:'login',component: Login}
];
