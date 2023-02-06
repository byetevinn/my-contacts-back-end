import { Router } from "express";

import ensureAuth from "../middlewares/ensureAuth.middleware";

import contactCreateController from "../controllers/contacts/createContact.controller";
import listContactsController from "../controllers/contacts/listContacts.controller";

const routes = Router();

const contactsRoutes = () => {
  routes.post("", ensureAuth, contactCreateController);
  routes.get("", ensureAuth, listContactsController);

  return routes;
};

export default contactsRoutes;
