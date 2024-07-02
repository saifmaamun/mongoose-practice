import { TStudent } from './student.interface';
import { StudentModel } from './student.model';

// insert a single student
const createStudentIntoDB = async (student: TStudent) => {
  // built-in instance methods 1
  // const studentInstance = new StudentModel(student);

  // if (await studentInstance.isUserExist(student.email)) {
  //   throw new Error('Student already exists');
  // }

  // const result = await studentInstance.save();

  // static method
  if (await StudentModel.isUserExist(student.email)) {
    throw new Error('Student already exists');
  }
  const result = await StudentModel.create(student); //built-in static method
  return result;
};
// get all students
const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

// get a single student
const getSingleStudentFromDB = async (_id: string) => {
  // const result = await StudentModel.findOne({ _id });
  const result = await StudentModel.aggregate([{ $match: { _id: _id } }]);
  return result;
};

// delete a single student
const deleteSingleStudentFromDB = async (_id: string) => {
  const result = await StudentModel.updateOne({ _id }, { isDeleted: true });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteSingleStudentFromDB,
};
