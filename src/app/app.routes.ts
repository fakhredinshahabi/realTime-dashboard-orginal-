import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Auth } from './auth/auth/auth';
import { Register } from './auth/register/register';
import { Login } from './auth/login/login';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/rigester', pathMatch: 'full' },
  {
    path: 'auth',
    component: Auth,
    children: [
      { path: 'rigester', component: Register },
      { path: 'login', component: Login },
    ],
  },
  { path: 'home', component: Dashboard },
];
