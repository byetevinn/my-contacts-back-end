import { Router } from "express";

import ensureAuth from "../middlewares/ensureAuth.middleware";

import clientCreateController from "../controllers/clients/createClient.controller";
import listClientsController from "../controllers/clients/listClient.controller";
import updateClientController from "../controllers/clients/updateClient.controller";
import deleteClientController from "../controllers/clients/deleteClient.controller";

const routes = Router();

const clientRoutes = () => {
  routes.post("", clientCreateController);
  routes.get("", ensureAuth, listClientsController);
  routes.patch("", ensureAuth, updateClientController);
  routes.delete("", ensureAuth, deleteClientController);

  return routes;
};

export default clientRoutes;
