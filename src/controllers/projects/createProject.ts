import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Project } from "../../entities";

const createProject = async (req: Request, res: Response) => {
  const { name, description, category, projectEmail } = req.body as {
    name?: string;
    description?: string;
    category?: number;
    projectEmail?: string;
  };

  try {
    if (!name || !description || !category || !projectEmail)
      throw new Error("Please complete all the fields");

    const projectExist = await AppDataSource.getRepository(Project).findOneBy({
      name: name,
    });

    if (projectExist) {
      throw new Error(
        "The name of the project already exists, please change it"
      );
    }
    const projectCreated = await AppDataSource.getRepository(Project).create(
      req.body
    );

    const results = await AppDataSource.getRepository(Project).save(
      projectCreated
    );

    return res.status(200).json(results);
  } catch (err) {
    if (err instanceof Error) res.status(400).json({ message: err.message });
    else res.status(400).json({ error: err, message: "Unexpected error" });
  }
};

export default createProject;
