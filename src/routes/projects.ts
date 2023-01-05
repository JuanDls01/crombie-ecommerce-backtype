import { Router } from "express";
import createProject from "../controllers/projects/createProject";
import getProjects from "../controllers/projects/getProjects";

const projectRoute = Router();

projectRoute.get("/", getProjects);
projectRoute.post("/create", createProject);

export default projectRoute;
