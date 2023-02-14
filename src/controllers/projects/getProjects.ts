import { Request, Response } from "express";
import { Project } from "../../entities";
import { AppDataSource } from "../../data-source";

const getProjects = async (req: Request, res: Response) => {
  const pageSize: number = req.query.pageSize ? Number(req.query.pageSize) : 2;
  const currentPage: number = req.query.currentPage
    ? Number(req.query.currentPage)
    : 1;
  const offset: number = currentPage * pageSize - pageSize;
  try {
    const totalProjects = await AppDataSource.getRepository(Project)
      .createQueryBuilder("project")
      .getCount();
    console.log(offset, pageSize);

    const projectCategory = await AppDataSource.getRepository(Project)
      .createQueryBuilder("project")
      .offset(offset)
      .limit(pageSize)
      .leftJoinAndSelect("project.category", "category")
      .getMany();

    if (projectCategory.length > 0) {
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
