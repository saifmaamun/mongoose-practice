import { z } from 'zod';

// UserName schema
const UserNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .nonempty()
    .regex(/^[a-zA-Z]+$/, 'First name must contain only alphabetic characters'),
  middleName: z.string().trim().optional(),
  lastName: z.string().trim().optional(),
});

// Guardian schema
const GuardianValidationSchema = z.object({
  fathersName: z.string().nonempty(),
  fathersContactNo: z.string().optional(),
  fathersOccupation: z.string().nonempty(),
  mothersName: z.string().nonempty(),
  mothersContactNo: z.string().optional(),
  mothersOccupation: z.string().optional(),
});

// Local Guardian schema
const LocalGuardianValidationSchema = z.object({
  name: z.string().nonempty(),
  occupation: z.string().nonempty(),
  contactNo: z.string().nonempty(),
  address: z.string().nonempty(),
});

// Student schema
const StudentValidationSchema = z.object({
  name: UserNameValidationSchema,
  password: z.string().min(8),
  gender: z.enum(['male', 'female']),
  dateOfBirth: z.string().nonempty(),
  age: z.number().min(0),
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional(),
  contactNo: z.string().nonempty(),
  profileImageUrl: z.string().url(),
  guardian: GuardianValidationSchema,
  localGuardian: LocalGuardianValidationSchema,
  presentAddress: z.string().nonempty(),
  permanentAddress: z.string().nonempty(),
  class: z.number().min(1),
  sGroup: z.string().nonempty(),
  schoolName: z.string().nonempty(),
  collegeName: z.string().nonempty(),
  cGroup: z.string().nonempty(),
  email: z.string().email().nonempty(),
  isActive: z.enum(['active', 'inActive']).default('active'),
  isDeleted: z.boolean().default(false),
});

export default StudentValidationSchema;
