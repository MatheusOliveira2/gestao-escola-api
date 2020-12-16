import express from 'express';
import cors from 'cors';
import studentRouter from './src/routes/student';
import teacherRouter from './src/routes/teacher';
import classRouter from './src/routes/class';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/student', studentRouter);
app.use('/teacher', teacherRouter);
app.use('/class', classRouter);

export default app;
