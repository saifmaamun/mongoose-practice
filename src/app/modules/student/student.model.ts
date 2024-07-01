import { Schema, model } from 'mongoose';
import validator from 'validator';
import {
  Guardian,
  LoacalGuardian,
  Student,
  UserName,
} from './student.interface';

const UserNameSchema: Schema = new Schema<UserName>({
  firstName: {
    type: String,
    required: true,
    validate: {
      validator: (value: string) => {
        validator.isAlpha(value);
      },
      message: '{VALUE} is not a valid',
    },
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
  },
});

const GuardianSchema: Schema = new Schema<Guardian>({
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

const LocalGuardianSchema: Schema = new Schema<LoacalGuardian>({
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

const studentSchema = new Schema<Student>({
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
    validate: {
      validator: (value: string) => {
        validator.isEmail(value);
      },
      message: 'Please enter a valid email address',
    },
  },
  isActive: {
    type: String,
    enum: ['active', 'inActive'],
    required: true,
  },
});

export const StudentModel = model<Student>('Student', studentSchema);
