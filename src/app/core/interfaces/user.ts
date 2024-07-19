export interface User {
  firstName: string;
  lastName: string;
  age: number;
  sex: 'MALE' | 'FEMALE';
  gender: string;
  phone: string;
  protocol: string;
  pathology: string;
  protocolStartDate: Date;
  referringPractitionerFirstName: string;
  referringPractitionerLastName: string;
  referringDoctorFirstName: string;
  referringDoctorLastName: string;
}
