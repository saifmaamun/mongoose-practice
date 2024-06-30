import { Schema, model, connect } from 'mongoose';

export type IStudent = {
  name: {
    firstName: string;
    middleName?: string;
    lastName?: string;
  };
  gender: 'male' | 'female';
  dateOfBirth: string;
  age: number;
  bloodGroup?: string;
  contactNo: string;
  fathersName: string;
  fathersContactNo?: string;
  mothersName: string;
  mothersContactNo?: string;
  address: string;
  class: number;
  sGroup?: string;
  schoolName: string;
  collageName?: string;
  cGroup?: string;
  email: string;
};
