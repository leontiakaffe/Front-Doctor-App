import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-identification',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './identification.html',
  styleUrl: './identification.css',
})
export class Identification {
  ssn = ' ';
  vat = ' ';
  secretcode = ' ';
  codeSentMessageVisible = false;

  @Output() goToCreateAccountStage2 = new EventEmitter<void>();
  @Output() identificationSuccess = new EventEmitter<void>();

  onIdentification(){
    const isValid = true; //why javascript?

    if(isValid){
      this.identificationSuccess.emit();
    }else{
      console.log('Λάθος στοιχεία'); //try other way
    }
  }

  onVerifyUserClick(){
    this.goToCreateAccountStage2.emit();
  }

  sendCode(){
    this.codeSentMessageVisible = true;

    this.secretcode = '123456';

  setTimeout(() => {
    this.codeSentMessageVisible = false;
  }, 4000);
  }


}
