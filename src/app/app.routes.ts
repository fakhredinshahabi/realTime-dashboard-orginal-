import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Auth } from './auth/auth/auth';
import { Register } from './auth/register/register';
import { Login } from './auth/login/login';
import { Settings } from './pages/settings/settings';

export const routes: Routes = [
  { path: 'home', component: Dashboard },
  { path: 'setting', component: Settings },
  { path: '', redirectTo: 'auth/rigester', pathMatch: 'full' },
  {
    path: 'auth',
    component: Auth,
    children: [
      { path: 'rigester', component: Register },
      { path: 'login', component: Login },
    ],
  },
];
