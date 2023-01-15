import { Router } from "express";
import categoryRoute from "./categories";
import projectRoute from "./projects";

const mainRouter = Router();

mainRouter.use("/project", projectRoute);
mainRouter.use("/category", categoryRoute);

export default mainRouter;
