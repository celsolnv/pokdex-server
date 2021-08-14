import "./setup";

import express from "express";
import 'express-async-errors';
import cors from "cors";
import "reflect-metadata";
import {router} from './routes';
import connectDatabase from "./database";
import { middlewareError } from "./middlewares/middlewareError";


const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(middlewareError);

export async function init () {
  await connectDatabase();
}

export default app;
