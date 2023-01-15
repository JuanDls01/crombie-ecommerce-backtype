import { Router } from "express";
import createProject from "../controllers/projects/createProject";
import getProjects from "../controllers/projects/getProjects";
import deleteProject from "../controllers/projects/deleteProject";
import updateProject from "../controllers/projects/updateProject";

const projectRoute = Router();

projectRoute.get("/", getProjects);
projectRoute.post("/create", createProject);
projectRoute.delete("/:id", deleteProject);
projectRoute.put("/:id", updateProject);

export default projectRoute;
