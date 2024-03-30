import chatsService from "../../services/chatsService.js";
export const generateChatCompletion = async (req, res, next) => {
    try {
        const { message } = req.body;
        const user = await chatsService.generateChat(message, res.locals.jwtData.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({ message: "SUCCESS", chats: user.chats });
    }
    catch (error) {
        console.log(error.stack);
        if (error.response && error.response.status === 429) {
            const retryAfter = error.response.headers["retry-after"]; // Time in seconds to wait before retrying
            console.log(`Rate limit exceeded. Retry after ${retryAfter} seconds.`);
            return res.status(429).json({ message: "Rate limit exceeded. Please try again later." });
        }
        return res.status(500).json({ message: "ERROR", cause: error.message });
    }
};
//# sourceMappingURL=generateChatCompletion.js.map