import express, {Express, Request, Response} from 'express';
import userRouter from './routes/userRouter';
import {connect} from 'mongoose';
const app: Express = express();

app.use(express.json());

app.use(userRouter);

