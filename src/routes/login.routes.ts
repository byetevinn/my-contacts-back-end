import { Router } from "express";
import clientLoginController from "../controllers/login/clientLogin.controller";

const routes = Router();

const loginRoutes = () => {
  routes.post("", clientLoginController);

  return routes;
};

export default loginRoutes;
