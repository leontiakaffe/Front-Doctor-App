import { Component } from '@angular/core';
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
  mln = ' ';
  secretcode = ' ';

}
