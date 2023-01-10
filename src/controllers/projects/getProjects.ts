import { Request, Response } from "express";
import { Project } from "../../entities";
import { AppDataSource } from "../../data-source";

const getProjects = async (req: Request, res: Response) => {
  try {
    const projects = await AppDataSource.getRepository(Project).find();
    /////TODO
    const projectCategory = await AppDataSource.getRepository(Project)
      .createQueryBuilder("project")
      .leftJoin("project.category", "category");
    // .getOne();
    console.log("-------------------projectCategory", projectCategory);
    return res.status(200).json(projects);
  } catch (err) {
    if (err instanceof Error) res.status(400).json({ message: err.message });
    else res.status(400).json({ error: err, message: "Unexpected error" });
  }
};

export default getProjects;
