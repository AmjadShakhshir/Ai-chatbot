import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
// Connect to the database and start the server
const PORT = process.env.PORT || 5000;
connectToDatabase()
    .then(() => {
    app.listen(PORT, () => {
        console.log("Server is running on PORT 5000 and connected to MongoDB");
    });
})
    .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});
//# sourceMappingURL=index.js.map