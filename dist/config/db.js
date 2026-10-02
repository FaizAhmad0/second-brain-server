import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable");
}
export const ConnectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("Database connected");
    }
    catch (e) {
        console.log("Error in mongo-connection");
    }
};
//# sourceMappingURL=db.js.map