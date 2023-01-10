import { Router } from "express";
import getCategories from "../controllers/categories/getCategories";
import createCategory from "../controllers/categories/createCategory";

const categoryRoute = Router();

categoryRoute.get("/", getCategories);
categoryRoute.post("/create", createCategory);

export default categoryRoute;
