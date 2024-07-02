import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

// will call controller
router.get('/:studentId', StudentControllers.getSingleStudentC);
router.delete('/:studentId', StudentControllers.deleteSingleStudentC);
router.post('/create-student', StudentControllers.createStudentC);
router.get('/', StudentControllers.getStudentsC);

export const StudentRoutes = router;
