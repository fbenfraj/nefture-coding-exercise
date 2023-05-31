import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import heroesRoutes from "./controllers/heroes.controller";
import statsRoutes from "./controllers/stats.controller";
import { sequelize } from "./database";

const app = express();
const port = 3001;

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.use(cors());
app.use("/heroes", heroesRoutes);
app.use("/stats", statsRoutes);

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.message);
  res.status(500).send("Something broke!");
});

sequelize
  .sync()
  .then(() =>
    app.listen(port, () => {
      console.log(`Nefturians server is running on port ${port}!`);
    })
  )
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
