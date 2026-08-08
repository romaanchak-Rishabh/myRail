import conf from "../config/config.js";

const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    
    res.status(statusCode).json({
        message: err.message || "Internal Server Error",
        stack: conf.nodeEnv === 'production' ? null : err.stack
    })
}

export default errorHandler;