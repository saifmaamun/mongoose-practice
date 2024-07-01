import { Request, Response } from 'express';
import { StudentServices } from './student.service';

// create a new student
const createStudentC = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    const result = await StudentServices.createStudentIntoDB(studentData);

    res.status(200).json({
      success: true,
      message: 'Student is created succesfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Error while creating student',
      error: err,
    });
  }
};

// get all students
const getStudentsC = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'Students are successfully retrieved',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Error while getting all students',
      error: err,
    });
  }
};

//get single student by id
const getSingleStudentC = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student found successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Error while getting single student by id',
      error: err,
    });
  }
};

export const StudentControllers = {
  createStudentC,

  getStudentsC,
  getSingleStudentC,
};
