import { Router } from "express";
import clientCreateController from "../controllers/clients/createClient.controller";

const routes = Router();

const clientRoutes = () => {
  routes.post("", clientCreateController);

  return routes
};

export default clientRoutes;
