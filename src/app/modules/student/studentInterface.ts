import { Schema, model, connect } from 'mongoose';

export type Guardian = {
  fathersName: string;
  fathersContactNo?: string;
  fathersOccupation: string;
  mothersName: string;
  mothersContactNo?: string;
  mothersOccupation?: string;
};

export type IStudent = {
  name: {
    firstName: string;
    middleName?: string;
    lastName?: string;
  };
  gender: 'male' | 'female';
  dateOfBirth: string;
  age: number;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  contactNo: string;
  guardian: Guardian;

  presentAddress: string;
  permanentAddress: string;
  class: number;
  sGroup: string;
  schoolName: string;
  collageName: string;
  cGroup: string;
  email: string;
};
