import mongoose from "mongoose";
import config from "config";
async function dbConnect(){
    try {
        await mongoose.connect(config.get("DB_URL"));
        console.log("Connected to DB");
    } catch (error) {
        console.error(error);
    }
}

dbConnect();