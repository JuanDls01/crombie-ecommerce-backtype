import { Request, Response } from "express";
import { Category } from "../../entities";
import { AppDataSource } from "../../data-source";

const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await AppDataSource.getRepository(Category).find();
    return res.status(200).json(categories);
  } catch (err) {
    if (err instanceof Error) res.status(400).json({ message: err.message });
    else res.status(400).json({ error: err, message: "Unexpected error" });
  }
};

export default getCategories;
