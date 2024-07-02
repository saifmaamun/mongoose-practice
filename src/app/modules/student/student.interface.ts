import { Model } from 'mongoose';

export type TGuardian = {
  fathersName: string;
  fathersContactNo?: string;
  fathersOccupation: string;
  mothersName: string;
  mothersContactNo?: string;
  mothersOccupation?: string;
};

export type TUserName = {
  firstName: string;
  middleName?: string;
  lastName?: string;
};

export type TLoacalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};
export type TStudent = {
  name: TUserName;
  gender: 'male' | 'female';
  dateOfBirth: string;
  age: number;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  contactNo: string;
  profileImageUrl: string;
  guardian: TGuardian;
  localGuardian: TLoacalGuardian;
  presentAddress: string;
  permanentAddress: string;
  class: number;
  sGroup: string;
  schoolName: string;
  collegeName: string;
  cGroup: string;
  email: string;
  isActive: 'active' | 'inActive';
};

export type TStudentMethods = {
  isUserExist(email: string): Promise<TStudent | null>;
};

export type TStudentModel = Model<
  TStudent,
  Record<string, never>,
  TStudentMethods
>;
