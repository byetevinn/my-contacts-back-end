import { Express } from "express";

import clientRoutes from "./clients.routes";
import contactsRoutes from "./contacts.routes";
import loginRoutes from "./login.routes";

const appRoutes = (app: Express) => {
  app.use("/clients", clientRoutes());
  app.use("/contacts", contactsRoutes());
  app.use("/login", loginRoutes());
};

export default appRoutes;
