import UserRepo from "../../models/UserModel.js";
import { ApiError } from "../../middlewares/errors/ApiError.js";
import { COOKIE_NAME } from "../../utils/constants.js";
export const logout = async (req, res, next) => {
    try {
        const user = await UserRepo.findById(res.locals.jwtData.id);
        if (!user) {
            next(ApiError.forbidden("User Not registered OR Token malfunctioned"));
        }
        if (user._id.toString() !== res.locals.jwtData.id) {
            next(ApiError.forbidden("Permission didn't match"));
        }
        res.clearCookie(COOKIE_NAME, {
            path: "/",
            domain: "localhost",
            httpOnly: true,
            signed: true,
        });
        return res.status(200).json({ message: "User Verified", name: user.name, email: user.email });
    }
    catch (error) {
        next(ApiError.internal(error.message));
    }
};
//# sourceMappingURL=logout.js.map