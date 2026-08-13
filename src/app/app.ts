import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calendar } from './Components/calendar/calendar';
import {Login} from './Components/login/login'
import {Identification} from './Components/identification/identification'
import { CreateAccount } from './Components/create-account/create-account';
import { AuthLayout } from './Components/auth-layout/auth-layout';

type TabType = 'login' | 'identification' | 'create-account' | 'calendar' ; // why not put here also calendar?

@Component({
  selector: 'app-root',
  imports: [Calendar,Login,Identification,CreateAccount, AuthLayout],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  activeTab: TabType = 'login';
  isAuthorized: boolean = false;
  isIdentified: boolean = false;

  setTab(tab: TabType ){
    this.activeTab = tab;
  }

  onLoginSuccess(){
    this.isAuthorized = true;
    this.activeTab = 'calendar'
  }

  onIdentificationSuccess(){
    this.isIdentified = true;
    this.activeTab = 'create-account'
  }

  onGoToCreateAccount(){
    this.activeTab = 'identification'; // try to do how to go directly to create account if identification is already a success(saved cookie?)
  }

  onGoToCreateAccountStage2(){
    this.activeTab = 'create-account';
    
  }
}
