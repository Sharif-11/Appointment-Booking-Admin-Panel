export interface Doctor {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  dateOfBirth: string;
  phoneNo: string;
  designation: string;
  aboutMe?: string | undefined;
}
