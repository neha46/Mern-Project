import express from 'express'
const app = express();

app.use(express.json())

//route imports
import product from './routes/productRoute.js';

//load route
app.use('/',product)
export  default app;
