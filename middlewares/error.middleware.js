import ApiError from '../utils/apiError.js';

export const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        status: "error",
        message: err.message || "Internal Server Error",
    });
};