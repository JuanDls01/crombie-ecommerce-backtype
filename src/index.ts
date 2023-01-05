import { AppDataSource } from "./data-source";

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mainRouter from "./routes";
import "reflect-metadata";

const app = express();

const allowedOrigins = ["http://localhost:3000"];

const corsOptions = {
  origin: allowedOrigins,
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use("/", mainRouter);

AppDataSource.initialize()
  .then(async () => {
    app.listen(3000, () => {
      return console.log(`Server running on ${3000}`);
    });
  })
  .catch((error) => console.log(error));
