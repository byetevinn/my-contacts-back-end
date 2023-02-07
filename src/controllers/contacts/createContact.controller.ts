import { Request, Response } from "express";

import contactCreateService from "../../services/contacts/createContact.service";

const createContactController = async (req: Request, res: Response) => {
  const { email, fullName, phone } = req.body;
  const { id } = req.client;

  const newContact = await contactCreateService(
    {
      email,
      fullName,
      phone,
    },
    id
  );

  return res.status(201).json(newContact);
};

export default createContactController;
