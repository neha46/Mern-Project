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
        .catch((err) => {
            console.log(err);
        });
};

export default connectDataBase;
