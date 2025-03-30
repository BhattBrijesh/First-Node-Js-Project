import "dotenv/config";
import connectionDb from "./db/index.js";
import { app } from "./app.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { urlencoded } from "express";
import express from "express";
connectionDb()
  .then(() => {
    const port = process.env.PORT || 8000;
    app.listen(port, console.log(`servicer is running  at port : ${port}`));
  })
  .catch((error) => {
    console.log("Mongo DB Connection Failed :", error);
  });

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
app.use(express.urlencoded({ extends: true, limit: "16kb" }));
app.use(express.json({ limit: "16kb" }));
app.use(express.static("public"));
