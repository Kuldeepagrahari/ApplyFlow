import mongoose from "mongoose";

// ----------BUG: env config has not been done currently: in case we import this file statically in server.js. But in case of dynamic import, we can write this line here also
const URI = process.env.MONGODB_URI;
//--------------------------------------

const ConnectDB = async () => {

    const URI = process.env.MONGODB_URI; // here it will work for both the cases

    if (!URI) {
        console.error("MongoDB URI missing in .env");
        process.exit(1);
    }

    try {
        await mongoose.connect(URI);

        console.log("MongoDB Connected Successfully!");
    } catch (error) {
        console.error("MongoDB Connection Failed:", error);
        process.exit(1);
    }
};

export default ConnectDB;