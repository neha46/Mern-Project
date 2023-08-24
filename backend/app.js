import express from 'express'

import errorMiddleware from "./middleware/error.js"
const app = express();

app.use(express.json())

//route imports
import product from './routes/productRoute.js';

//load route
app.use('/',product)


//middleware for ewrror
app.use(errorMiddleware)


export  default app;  
