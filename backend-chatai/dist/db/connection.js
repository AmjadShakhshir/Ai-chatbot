import mongoose from "mongoose";
const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};
const disconnectFromDatabase = async () => {
    try {
        await mongoose.disconnect();
        console.log("Disconnected from MongoDB");
    }
    catch (error) {
        console.error("Error disconnecting from MongoDB:", error);
    }
};
export { connectToDatabase, disconnectFromDatabase };
//# sourceMappingURL=connection.js.map