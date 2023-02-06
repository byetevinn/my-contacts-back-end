import { Router } from "express";

import ensureAuth from "../middlewares/ensureAuth.middleware";

import contactCreateController from "../controllers/contacts/createContact.controller";

const routes = Router();

const contactsRoutes = () => {
  routes.post("", ensureAuth, contactCreateController);

  return routes;
};

export default contactsRoutes;
