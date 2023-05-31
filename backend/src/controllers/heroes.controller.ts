import express, { NextFunction, Request, Response } from "express";
import heroesService from "../services/heroes.service";

const router = express.Router();

router.get(
  "/:address",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { address } = req.params;
      const hero = await heroesService.getHeroByAddress(address);
      
      res.json(hero);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
