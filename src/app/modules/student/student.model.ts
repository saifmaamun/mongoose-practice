import { Schema, model } from 'mongoose';
import {
  TGuardian,
  TLoacalGuardian,
  TStudent,
  TStudentMethods,
  TStudentModel,
  TUserName,
} from './student.interface';

const UserNameSchema: Schema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
});

const GuardianSchema: Schema = new Schema<TGuardian>({
  fathersName: {
    type: String,
    required: true,
  },
  fathersContactNo: {
    type: String,
  },
  fathersOccupation: {
    type: String,
    required: true,
  },
  mothersName: {
    type: String,
    required: true,
  },
  mothersContactNo: {
    type: String,
  },
  mothersOccupation: {
    type: String,
  },
});

const LocalGuardianSchema: Schema = new Schema<TLoacalGuardian>({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const studentSchema = new Schema<TStudent, TStudentModel, TStudentMethods>({
  name: {
    type: UserNameSchema,
    required: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  contactNo: {
    type: String,
    required: true,
  },
  profileImageUrl: {
    type: String,
    required: true,
  },
  guardian: {
    type: GuardianSchema,
    required: true,
  },
  localGuardian: {
    type: LocalGuardianSchema,
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
  class: {
    type: Number,
    required: true,
  },
  sGroup: {
    type: String,
    required: true,
  },
  schoolName: {
    type: String,
    required: true,
  },
  collegeName: {
    type: String,
    required: true,
  },
  cGroup: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  isActive: {
    type: String,
    enum: ['active', 'inActive'],
    required: true,
  },
});

studentSchema.methods.isUserExist = async function (email: string) {
  const existingUser = await StudentModel.findOne({ email });
  return existingUser;
};

export const StudentModel = model<TStudent, TStudentModel>(
  'Student',
  studentSchema,
);
