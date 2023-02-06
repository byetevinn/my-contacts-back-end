import { Request, Response } from "express";

import ListContactsService from "../../services/contacts/listContacts.service";

const listContactsController = async (req: Request, res: Response) => {
  const { id } = req.client;

  const contacts = await ListContactsService(id);

  return res.send(contacts);
};

export default listContactsController;
