import { Request, Response } from "express";

import deleteClientService from "../../services/clients/deleteClient.service";

const deleteClientController = async (req: Request, res: Response) => {
  const { id } = req.client;

  await deleteClientService(id);

  return res.status(204).send();
};

export default deleteClientController;
