import { Router } from "express";
import getCategories from "../controllers/categories/getCategories";
import createCategory from "../controllers/categories/createCategory";
import deleteCategory from "../controllers/categories/deleteCategory";
import updateCategory from "../controllers/categories/updateCategory";

const categoryRoute = Router();

categoryRoute.get("/", getCategories);
categoryRoute.post("/create", createCategory);
categoryRoute.delete("/:id", deleteCategory);
categoryRoute.put("/:id", updateCategory);

export default categoryRoute;
