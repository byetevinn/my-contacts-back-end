import { Router } from "express";

import ensureAuth from "../middlewares/ensureAuth.middleware";

import listContactsController from "../controllers/contacts/listContacts.controller";
import updateContactController from "../controllers/contacts/updateContact.controller";
import createContactController from "../controllers/contacts/createContact.controller";

const routes = Router();

const contactsRoutes = () => {
  routes.post("", ensureAuth, createContactController);
  routes.get("", ensureAuth, listContactsController);
  routes.patch("", ensureAuth, updateContactController);

  return routes;
};

export default contactsRoutes;
