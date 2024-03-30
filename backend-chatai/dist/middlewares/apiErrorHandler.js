import { ApiError } from "./errors/ApiError.js";
export const apiErrorHandler = (error, req, res, next) => {
    const paths = /^(\/users)/;
    if (error instanceof ApiError) {
        res.status(error.code).json({ message: error.message });
        return;
    }
    res.status(500).json({ message: "Something went wrong" });
};
//# sourceMappingURL=apiErrorHandler.js.map