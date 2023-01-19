import { Request, Response } from "express";
import { Project } from "../../entities";
import { AppDataSource } from "../../data-source";

const getProjects = async (req: Request, res: Response) => {
  try {
    const projectCategory = await AppDataSource.getRepository(Project)
      .createQueryBuilder("project")
      .leftJoinAndSelect("project.category", "category")
      .getMany();

    return res.status(200).json(projectCategory);
  } catch (err) {
    if (err instanceof Error) res.status(400).json({ message: err.message });
    else res.status(400).json({ error: err, message: "Unexpected error" });
  }
};

export default getProjects;
