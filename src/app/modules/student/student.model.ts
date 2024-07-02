import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';
import {
  TGuardian,
  TLoacalGuardian,
  TStudent,
  TStudentModel,
  // TStudentMethods,
  // TStudentModel,
  TUserName,
} from './student.interface';
import config from '../../config';

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

// const studentSchema = new Schema<TStudent, TStudentModel, TStudentMethods>({   //instance methods 1
const studentSchema = new Schema<TStudent, TStudentModel>(
  {
    //static methods
    name: {
      type: UserNameSchema,
      required: true,
      minLength: [8, 'Must be at least 8 characters'],
    },
    password: {
      type: String,
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
      default: 'active',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  },
);

studentSchema.virtual('fullName').get(function () {
  return `${this.name.firstName} ${this.name.lastName}`;
});

// instance methods 1
// studentSchema.methods.isUserExist = async function (email: string) {
//   const existingUser = await StudentModel.findOne({ email });
//   return existingUser;
// };

// export const StudentModel = model<TStudent, TStudentModel>(    //instance methods 1

//static methods
studentSchema.statics.isUserExist = async function (email: string) {
  const existingUser = await StudentModel.findOne({ email });
  return existingUser;
};

// middleware methods
studentSchema.pre('save', async function (next) {
  // hassing pasword and save the password in the database
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});
// middleware methods
studentSchema.post('save', function (doc, next) {
  doc.password = '';

  next();
});

//query middleware
studentSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
studentSchema.pre('findOne', function (next) {
  this.findOne({ isDeleted: { $ne: true } });
  next();
});
studentSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });

  next();
});

export const StudentModel = model<TStudent, TStudentModel>(
  'Student',
  studentSchema,
);
