import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

// will call controller
router.post('/create-student', StudentControllers.createStudentC);

export const StudentRoutes = router;
