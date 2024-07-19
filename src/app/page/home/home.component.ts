import { Component } from '@angular/core';
import { User } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  user: User = {
    firstName: 'Danielle',
    lastName: 'Hon',
    age: 43,
    sex: 'MALE',
    gender: 'CISGENDER',
    phone: '+33 6 52 25 88 64',
    protocol: 'chimio',
    pathology : 'cancer du sein',
    protocolStartDate: new Date('2023-10-09'),
    referringPractitionerFirstName: 'Josie',
    referringPractitionerLastName: 'BALLARD',
    referringDoctorFirstName :'Alexandre',
    referringDoctorLastName : 'HINTEUR',
  }

}
