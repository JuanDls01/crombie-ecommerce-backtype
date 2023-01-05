import { Request, Response } from "express";

const createProject = async (req: Request, res: Response) => {
  const { name, description, category } = req.body as {
    name?: string;
    description?: string;
    category?: number;
  };
};
