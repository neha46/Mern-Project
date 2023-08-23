        import express from 'express'
        import app from "./app.js";
        import dotenv from 'dotenv'
        import connectDataBase from './config/database.js';

        // configure

        dotenv.config({path:'backend/config/config.env'});

        // connectiong to database
        connectDataBase();

        app.use(express.json())

        app.listen(process.env.PORT,()=>
        {console.log(`server is running at this http://localhost:${process.env.PORT}`);

        }
        )