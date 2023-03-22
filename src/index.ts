import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mainRouter from "./routes";
import "reflect-metadata";
import { AppDataSource } from "./data-source";

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use("/", mainRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

AppDataSource.initialize()
  .then(async () => {
    app.listen(8000, () => {
      return console.log(`Server running on ${8000}`);
    });
  })
  .catch((error) => console.log(error));
