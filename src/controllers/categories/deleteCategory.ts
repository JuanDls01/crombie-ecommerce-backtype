import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Category, Project } from "../../entities";

const deleteCategory = async (req: Request, res: Response) => {
  const { id } = req.params as { id: string };
  try {
    const categoryToDelete = await AppDataSource.getRepository(
      Category
    ).findOneBy({
      id: Number(id),
    });
    if (!categoryToDelete) {
      throw new Error("The Poject has already been deleted");
    } else {
      await AppDataSource.getRepository(Category).delete(id);
      return res.status(200).json(categoryToDelete);
    }
  } catch (err) {
    if (err instanceof Error) res.status(400).json({ message: err.message });
    else res.status(400).json({ error: err, message: "Unexpected error" });
  }
};

export default deleteCategory;
