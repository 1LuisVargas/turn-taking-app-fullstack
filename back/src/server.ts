// Importing modules
import express, { Request, Response, Express } from 'express';
import router from './routes';
import cors from 'cors';
import morgan from 'morgan';

// Creating the server app
const app: Express = express();

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use(router);

//Exporting the app
export default app;