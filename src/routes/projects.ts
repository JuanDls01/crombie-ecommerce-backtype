import { Router } from "express";
import getProjects from "../controllers/projects/getProjects";

const projectRoute = Router();

projectRoute.get("/", getProjects);

export default projectRoute;
