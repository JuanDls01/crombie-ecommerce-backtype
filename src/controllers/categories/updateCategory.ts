import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";

const updateCategory = async (req: Request, res: Response) => {
  const { name } = req.body as {
    name?: string;
  };
  const { id } = req.params as { id: string };
  try {
    if (!name) {
      throw new Error("Please modify at least one field");
    } else {
      const categoryToUpdate = await AppDataSource.getRepository(
        Category
      ).findOneBy({
        id: Number(id),
      });
      if (!categoryToUpdate) {
        throw new Error("The Poject does not exist");
      }

      AppDataSource.getRepository(Category).merge(categoryToUpdate, req.body);
      const results = await AppDataSource.getRepository(Category).save(
        categoryToUpdate
      );
      return res.send(results);
    }
  } catch (err) {
    if (err instanceof Error) res.status(400).json({ message: err.message });
    else res.status(400).json({ error: err, message: "Unexpected error" });
  }
};

export default updateCategory;
