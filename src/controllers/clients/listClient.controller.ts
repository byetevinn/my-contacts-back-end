import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";

import listClientService from "../../services/clients/listClient.service";

const listClientController = async (req: Request, res: Response) => {
  const { id } = req.client;

  const clients = await listClientService(id);

  return res.send(instanceToPlain(clients));
};

export default listClientController;
