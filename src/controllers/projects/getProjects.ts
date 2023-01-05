import { Request, Response } from "express";

const getProjects = async (req: Request, res: Response) => {
  return res.status(200).json({ message: "Hola mundo" });
};

export default getProjects;
