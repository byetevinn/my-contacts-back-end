import { Router } from "express";

import ensureAuth from "../middlewares/ensureAuth.middleware";

import clientCreateController from "../controllers/clients/createClient.controller";
import listClientsController from "../controllers/clients/listClients.controller";
import updateClientController from "../controllers/clients/updateClient.controller";

const routes = Router();

const clientRoutes = () => {
  routes.post("", clientCreateController);
  routes.get("", ensureAuth, listClientsController);
  routes.patch("", ensureAuth, updateClientController);

  return routes;
};

export default clientRoutes;
