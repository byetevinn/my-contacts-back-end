import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";

import listClientsService from "../../services/clients/listClients.service";

const listClientsController = async (req: Request, res: Response) => {
  const clients = await listClientsService();

  return res.send(instanceToPlain(clients));
};

export default listClientsController;
