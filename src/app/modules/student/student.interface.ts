import { Schema, model, connect } from 'mongoose';

export type Guardian = {
  fathersName: string;
  fathersContactNo?: string;
  fathersOccupation: string;
  mothersName: string;
  mothersContactNo?: string;
  mothersOccupation?: string;
};

export type UserName = {
  firstName: string;
  middleName?: string;
  lastName?: string;
};

export type LoacalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};
export type Student = {
  name: UserName;
  gender: 'male' | 'female';
  dateOfBirth: string;
  age: number;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  contactNo: string;
  profileImageUrl: string;
  guardian: Guardian;
  localGuardian: LoacalGuardian;
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
