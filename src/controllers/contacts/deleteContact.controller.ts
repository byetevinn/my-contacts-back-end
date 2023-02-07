import { Request, Response } from "express";

import deleteContactService from "../../services/contacts/deleteContact.service";

const deleteContactController = async (req: Request, res: Response) => {
  const { id } = req.body;

  await deleteContactService(id);

  return res.status(204).send();
};

export default deleteContactController;
