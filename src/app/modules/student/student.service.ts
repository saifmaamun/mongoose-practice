import { Student } from './student.interface';
import { StudentModel } from './student.model';

// insert a single student
const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};
// get all students
const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

// get a single student
const getSingleStudentFromDB = async (_id: string) => {
  const result = await StudentModel.findOne({ _id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
