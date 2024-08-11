import dotenv from "dotenv";
dotenv.config();

const PORT = "5555";

const mongoDBUrl = process.env.mongoDBUrl;

export { PORT, mongoDBUrl };
