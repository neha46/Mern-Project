        import express from 'express'
        import app from "./app.js";
        import dotenv from 'dotenv'
        import connectDataBase from './config/database.js';

        //unhandlimng uncaught exception--
        process.on('uncaughtException', (err) => {
                console.log(`Error:${err.message}`);
                console.log('shut down the server due to uncaught exception');
         process.exit(1)})
        
        // configure

        dotenv.config({path:'backend/config/config.env'});

        // connectiong to database
        connectDataBase();

        app.use(express.json())

         const server=app.listen(process.env.PORT,()=>
        {console.log(`server is running at  http://localhost:${process.env.PORT}`);

        }
        
        )
        //unghandled promise rejection- app crashed- mongo connect url
process.on("unhandledRejection",err=>{
        console.log(`Error:${err.message}`);
        console.log('shut down the server due to unhandled error');
        server.close(()=>{  process.exit(1)// swerver close

        })
        
    })