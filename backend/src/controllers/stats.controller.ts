import express, { NextFunction, Request, Response } from "express";
import Creature from "../models/creature.model";

const router = express.Router();

router.get(
  "/",
  async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const sides = ["Cyberian", "Samurian", "Lone Wolf"];
      const stats = await Promise.all(
        sides.map(async (side) => ({
          side,
          count: await Creature.count({ where: { side } }),
        }))
      );

      return res.json(stats);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
