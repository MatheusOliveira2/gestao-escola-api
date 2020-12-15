import express from 'express';
import cors from 'cors';
import studentRouter from './src/routes/student';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/student', studentRouter);

export default app;
