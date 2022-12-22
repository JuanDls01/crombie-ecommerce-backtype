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
    // console.log("Inserting a new user into the database...")
    // const user = new User()
    // user.firstName = "Timber"
    // user.lastName = "Saw"
    // user.age = 25
    // await AppDataSource.manager.save(user)
    // console.log("Saved a new user with id: " + user.id)

    // console.log("Loading users from the database...")
    // const users = await AppDataSource.manager.find(User)
    // console.log("Loaded users: ", users)

    // console.log("Here you can setup and run express / fastify / any other framework.")

    app.listen(3000, () => {
      return console.log(`Server running on ${3000}`);
    });
  })
  .catch((error) => console.log(error));
