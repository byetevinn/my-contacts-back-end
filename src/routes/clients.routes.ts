import { Router } from "express";

import ensureAuth from "../middlewares/ensureAuth.middleware";

import clientCreateController from "../controllers/clients/createClient.controller";
import listClientsController from "../controllers/clients/listClients.controller";

const routes = Router();

const clientRoutes = () => {
  routes.post("", clientCreateController);
  routes.get("", ensureAuth, listClientsController);

  return routes;
};

export default clientRoutes;
