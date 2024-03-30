import { randomUUID } from "crypto";
import mongoose from "mongoose";
const Schema = mongoose.Schema;
const chatSchema = new Schema({
    id: {
        type: String,
        default: randomUUID,
    },
    role: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    chats: {
        type: [chatSchema],
    },
}, {
    timestamps: true,
});
export default mongoose.model("User", UserSchema);
//# sourceMappingURL=UserModel.js.map