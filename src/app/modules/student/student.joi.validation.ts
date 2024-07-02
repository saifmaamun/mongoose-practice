import Joi from 'joi';
import {
  TGuardian,
  TLoacalGuardian,
  TStudent,
  TUserName,
} from './student.interface';

const UserNameValidationSchema = Joi.object<TUserName>({
  firstName: Joi.string()
    .trim()
    .regex(/^[a-zA-Z]+$/)
    .required()
    .messages({
      'string.pattern.base': '{#label} must contain only alphabetic characters',
    }),
  middleName: Joi.string()
    .trim()
    .regex(/^[a-zA-Z]+$/)
    .optional()
    .allow('')
    .messages({
      'string.pattern.base': '{#label} must contain only alphabetic characters',
    }),
  lastName: Joi.string()
    .trim()
    .regex(/^[a-zA-Z]+$/)
    .optional()
    .allow('')
    .messages({
      'string.pattern.base': '{#label} must contain only alphabetic characters',
    }),
});

// Guardian schema
const GuardianValidationSchema = Joi.object<TGuardian>({
  fathersName: Joi.string().required(),
  fathersContactNo: Joi.string().optional().allow(''),
  fathersOccupation: Joi.string().required(),
  mothersName: Joi.string().required(),
  mothersContactNo: Joi.string().optional().allow(''),
  mothersOccupation: Joi.string().optional().allow(''),
});

// Local Guardian schema
const LocalGuardianValidationSchema = Joi.object<TLoacalGuardian>({
  name: Joi.string().required(),
  occupation: Joi.string().required(),
  contactNo: Joi.string().required(),
  address: Joi.string().required(),
});

// Student schema
const StudentValidationSchema = Joi.object<TStudent>({
  name: UserNameValidationSchema.required(),
  gender: Joi.string().valid('male', 'female').required(),
  dateOfBirth: Joi.date().iso().required(),
  age: Joi.number().required(),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .optional(),
  contactNo: Joi.string().required(),
  profileImageUrl: Joi.string().uri().required(),
  guardian: GuardianValidationSchema.required(),
  localGuardian: LocalGuardianValidationSchema.required(),
  presentAddress: Joi.string().required(),
  permanentAddress: Joi.string().required(),
  class: Joi.number().required(),
  sGroup: Joi.string().required(),
  schoolName: Joi.string().required(),
  collegeName: Joi.string().required(),
  cGroup: Joi.string().required(),
  email: Joi.string().email().required(),
  isActive: Joi.string().valid('active', 'inActive').required(),
});

export default StudentValidationSchema;
