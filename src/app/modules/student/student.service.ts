import { TStudent } from './student.interface';
import { StudentModel } from './student.model';

// insert a single student
const createStudentIntoDB = async (student: TStudent) => {
  // const result = await StudentModel.create(student);  //built-in static method

  // built-in instance methods
  const studentInstance = new StudentModel(student);

  if (await studentInstance.isUserExist(student.email)) {
    throw new Error('Student already exists');
  }

  const result = await studentInstance.save();

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
