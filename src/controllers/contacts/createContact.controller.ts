import { Request, Response } from "express";

import contactCreateService from "../../services/contacts/createContact.service";

const contactCreateController = async (req: Request, res: Response) => {
  const { email, fullName, phone } = req.body;

  const newContact = await contactCreateService({
    email,
    fullName,
    phone,
  });

  return res.status(201).json(newContact);
};

export default contactCreateController;
