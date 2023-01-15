import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Project } from "../../entities";

const updateProject = async (req: Request, res: Response) => {
  const { name, description, category, projectEmail } = req.body as {
    name?: string;
    description?: string;
    category?: number;
    projectEmail?: string;
  };
  const { id } = req.params as { id: string };
  try {
    if (!name && !description && !category && !projectEmail) {
      throw new Error("Please modify at least one field");
    } else {
      const projectToUpdate = await AppDataSource.getRepository(
        Project
      ).findOneBy({
        id: Number(id),
      });
      if (!projectToUpdate) {
        throw new Error("The Poject does not exist");
      }

      AppDataSource.getRepository(Project).merge(projectToUpdate, req.body);
      const results = await AppDataSource.getRepository(Project).save(
        projectToUpdate
      );
      console.log("results", results);
      return res.send(results);
    }
  } catch (err) {
    if (err instanceof Error) res.status(400).json({ message: err.message });
    else res.status(400).json({ error: err, message: "Unexpected error" });
  }
};

export default updateProject;
