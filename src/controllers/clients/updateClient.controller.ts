import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";

import updateClientService from "../../services/clients/updateClient.service";

const updateClientController = async (req: Request, res: Response) => {
  const { id } = req.client;
  const { email, password, fullName, phone } = req.body;

  const updatedUser = await updateClientService({
    email,
    password,
    fullName,
    phone,
    id,
  });

  return res.status(200).json(instanceToPlain(updatedUser));
};

export default updateClientController;
