import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";

const createCategory = async (req: Request, res: Response) => {
  const { name } = req.body as {
    name?: string;
  };

  try {
    if (!name) throw new Error("Please complete the name of the category");

    const categoryExist = await AppDataSource.getRepository(Category).findOneBy(
      {
        name: name,
      }
    );

    if (categoryExist) {
      throw new Error(
        "The name of the category already exists, please change it"
      );
    }
    const categoryCreated = await AppDataSource.getRepository(Category).create(
      req.body
    );

    const results = await AppDataSource.getRepository(Category).save(
      categoryCreated
    );

    return res.status(200).json(results);
  } catch (err) {
    if (err instanceof Error) res.status(400).json({ message: err.message });
    else res.status(400).json({ error: err, message: "Unexpected error" });
  }
};

export default createCategory;
