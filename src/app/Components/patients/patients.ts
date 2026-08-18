import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-patients',
  imports: [FormsModule],
  templateUrl: './patients.html',
  styleUrl: './patients.css',
})
export class Patients {
patientfirstname = ' ';
patientlastname = ' ';
patientamka = ' ';
patientgender = ' ';
patientage = ' ';
patientphone = ' ';
}
