import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login  {

  username = '';
  password = '';

  @Output() loginSuccess = new EventEmitter<void>();
  @Output() goToCreateAccount = new EventEmitter<void>();

  onLogin(){
    const isValid = true; //why javascript?

    if(isValid){
      this.loginSuccess.emit();
    }else{
      console.log('Λάθος στοιχεία'); //try other way
    }
  }

  onCreateAccountClick(){
    this.goToCreateAccount.emit();
  }


}
