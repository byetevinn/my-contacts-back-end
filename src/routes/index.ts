import { Express } from "express";
import clientRoutes from "./clients.routes";

const appRoutes = (app: Express) => {
  app.use("/client", clientRoutes());
};

export default appRoutes;
