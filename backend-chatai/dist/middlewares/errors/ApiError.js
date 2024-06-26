export class ApiError {
    code;
    message;
    constructor(code, message) {
        this.code = code;
        this.message = message;
        this.code = code;
        this.message = message;
    }
    static resourceNotFound(msg) {
        return new ApiError(404, msg);
    }
    static badRequest(msg) {
        return new ApiError(400, msg);
    }
    static internal(msg) {
        return new ApiError(500, msg);
    }
    static forbidden(msg) {
        return new ApiError(403, msg);
    }
}
//# sourceMappingURL=ApiError.js.map