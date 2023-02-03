import { Express } from "express";

import clientRoutes from "./clients.routes";
import loginRoutes from "./login.routes";

const appRoutes = (app: Express) => {
  app.use("/client", clientRoutes());
  app.use("/login", loginRoutes());
};

export default appRoutes;
