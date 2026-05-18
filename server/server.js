import express from "express";
import dotenv from "dotenv";

dotenv.config();

// const {default: ConnectDB} = await import("./utils/db.js"); // dynamic import to give time time to load env first before loading this file

const moduleLoad = await import("./utils/db.js"); // this is another way to import dynamically
const ConnectDB = moduleLoad.default

const app = express();

// Middleware
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Route
app.get("/", async (req, res) => {
    try {
        console.log("Welcome to ApplyFlow!");
        res.send("Welcome to ApplyFlow!");
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

// Start Server
ConnectDB().then(() => {
    app.listen(PORT, () => {
        console.log("DB Connected!")
    })
}).catch(err => console.log(`DB error: ${err}`))