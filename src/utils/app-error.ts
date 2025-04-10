class AppError extends Error {
    public statusCode: number;
    public isOperational: boolean;

    constructor(message: string, statusCode: number, isOperational = true) {
        if (process.env.NODE_ENV !== "production") {
            console.log(`[ERROR]: ${message}`);
        }
        super(message);
        this.statusCode = statusCode;
        this.isOperational = isOperational;

        // Capture stack trace
        Error.captureStackTrace(this, this.constructor);
    }
}

export default AppError;