import { Express } from "express";

import handleErrorMiddleware from "../middlewares/handleError.middleware";

import clientRoutes from "./clients.routes";
import contactsRoutes from "./contacts.routes";
import loginRoutes from "./login.routes";

const appRoutes = (app: Express) => {
  app.use("/clients", clientRoutes());
  app.use("/contacts", contactsRoutes());
  app.use("/login", loginRoutes());
  app.use(handleErrorMiddleware);
};

export default appRoutes;
