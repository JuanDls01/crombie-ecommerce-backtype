import { Router } from 'express';

const mainRouter = Router();

mainRouter.use('/product', (req, res) => res.status(200).json("Hello world"));

export default mainRouter;