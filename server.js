import express from 'express';
import cors from 'cors';
import studentRouter from './src/routes/student';
import teacherRouter from './src/routes/teacher';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/student', studentRouter);
app.use('/teacher', teacherRouter);

export default app;
