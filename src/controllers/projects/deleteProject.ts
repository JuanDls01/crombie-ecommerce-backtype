import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Project } from "../../entities";

const deleteProject = async (req: Request, res: Response) => {
  const { id } = req.params as { id: string };
  try {
    const projectToDelete = await AppDataSource.getRepository(
      Project
    ).findOneBy({
      id: Number(id),
    });
    if (!projectToDelete) {
      throw new Error("The Poject has already been deleted");
    } else {
      const results = await AppDataSource.getRepository(Project).delete(id);
      return res.status(200).json(projectToDelete);
    }
  } catch (err) {
    if (err instanceof Error) res.status(400).json({ message: err.message });
    else res.status(400).json({ error: err, message: "Unexpected error" });
  }
};

export default deleteProject;
