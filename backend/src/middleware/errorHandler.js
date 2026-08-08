const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    
    res.status(statusCode).json({
        message: "Internal server error",
        stack: err.stack
    })
}

export default errorHandler;