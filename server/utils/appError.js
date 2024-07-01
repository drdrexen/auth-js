class createError extends Error {
    constructor(message, errorCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error'
        error.captureStackTrace(this, this.constructor);
    }
}

module.exports = createError;