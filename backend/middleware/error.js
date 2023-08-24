        import ErrorHandler from "../utils/errorHandler.js";
        export default (err,req,res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "internal server error";

    //wrong mondodb id error-- cast error
    if(err.name === 'CastError'){
        const message= `Resource not found invalid :the given ID ${err.value}`;
        err=new ErrorHandler(message,400)
    }
    res.status(err.statusCode).json({
        success: false,
       // error: err.stack
       //error:err,
       message:err.message
    });
};