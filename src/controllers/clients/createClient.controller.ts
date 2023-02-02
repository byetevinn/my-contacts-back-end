import clientCreateService from "../../services/clients/createClient.service";

import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";

const clientCreateController = async (req: Request, res: Response) => {
  const { email, password, fullName, phone } = req.body;

  const newClient = await clientCreateService({
    email,
    password,
    fullName,
    phone,
  });

  return res.status(201).json(instanceToPlain(newClient));
};

export default clientCreateController;
