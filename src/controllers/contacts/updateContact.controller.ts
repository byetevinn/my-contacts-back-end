import { Request, Response } from "express";

import updateContactService from "../../services/contacts/updateContact.service";

const updateContactController = async (req: Request, res: Response) => {
  const { id, email, fullName, phone } = req.body;

  const updatedUser = await updateContactService({
    email,
    fullName,
    phone,
    id,
  });

  return res.status(200).json(updatedUser);
};

export default updateContactController;
