import mongoose from "mongoose";

const connectDataBase = () => {
    mongoose
        .connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        })
        .then((data) => {
            console.log(`mongodb connected with server ${data.connection.host}`);
        })
       // catch is skipped bexz we are handling error by uncaught exception
};

export default connectDataBase;
