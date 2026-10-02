import express from "express";
import dotenv from "dotenv";
import { ConnectDB } from "./config/db.js";
dotenv.config();
//.d.ts  :- are the declaration file
const PORT = process.env.PORT || 5000;
const app = express();

await ConnectDB();



app.get("/health", (req, res) => {
  res.send({ message: "everything is good!" });
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
