import { Routes } from '@angular/router';
import { Login } from './Components/login/login';
import { Identification } from './Components/identification/identification';
import { CreateAccount} from './Components/create-account/create-account';
import { Calendar } from './Components/calendar/calendar';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'identification', component: Identification },
  { path: 'create_account', component: CreateAccount },
  { path: 'calendar', component: Calendar },
  { path: '**', redirectTo: 'login' },
];
