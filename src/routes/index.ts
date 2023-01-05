import { Router } from "express";
import projectRoute from "./projects";

const mainRouter = Router();

mainRouter.use("/project", projectRoute);

export default mainRouter;
