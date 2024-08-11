import dotenv from "dotenv";
dotenv.config();

const PORT = "5555";

const mongoDBUrl = `${process.env.mongoDBUrl}`;
// const mongoDBUrl =
//   "mongodb+srv://jefflustica2:bq567T5hUU2q3z5d@bookstoredb.v5r7vir.mongodb.net/books-collection?retryWrites=true&w=majority&appName=BookstoreDB";

console.log("MongoDB URL:", mongoDBUrl);

export { PORT, mongoDBUrl };
