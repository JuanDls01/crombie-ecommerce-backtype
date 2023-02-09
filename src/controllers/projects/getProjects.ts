import { Request, Response } from "express";
import { Project } from "../../entities";
import { AppDataSource } from "../../data-source";

const getProjects = async (req: Request, res: Response) => {
  const pageSize: number = req.query.pageSize ? Number(req.query.pageSize) : 5;
  const currentPage: number = req.query.currentPage
    ? Number(req.query.currentPage)
    : 1;
  const offset: number = currentPage * pageSize - pageSize;
  try {
    console.log(offset);
    const totalProjects = await AppDataSource.getRepository(Project)
      .createQueryBuilder("project")
      .getCount();

    const projectCategory = await AppDataSource.getRepository(Project)
      .createQueryBuilder("project")
      .limit(offset + pageSize)
      .offset(offset)
      .leftJoinAndSelect("project.category", "category")
      .getMany();

    console.log(totalProjects);

    if (projectCategory.length > 0) {
      const projectQuantity = projectCategory.length;
      return res
        .status(200)
        .json({ data: projectCategory, totalItems: totalProjects });
    }
    return res.status(200).json({ message: "No project found" });
  } catch (err) {
    if (err instanceof Error) res.status(400).json({ message: err.message });
    else res.status(400).json({ error: err, message: "Unexpected error" });
  }
};

export default getProjects;
