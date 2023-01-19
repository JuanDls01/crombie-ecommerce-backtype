import { Router } from "express";
import getCategories from "../controllers/categories/getCategories";
import createCategory from "../controllers/categories/createCategory";
import deleteCategory from "../controllers/categories/deleteCategory";

const categoryRoute = Router();

categoryRoute.get("/", getCategories);
categoryRoute.post("/create", createCategory);
categoryRoute.delete("/:id", deleteCategory);

export default categoryRoute;
