import UsersService from "../../services/usersService.js";
import { ApiError } from "../../middlewares/errors/ApiError.js";
export async function getAllUsers(_, res, next) {
    try {
        const users = await UsersService.findAll();
        res.status(200).json({ message: "OK", users });
    }
    catch (error) {
        next(ApiError.resourceNotFound("User not found"));
    }
}
//# sourceMappingURL=getAllUsers.js.map