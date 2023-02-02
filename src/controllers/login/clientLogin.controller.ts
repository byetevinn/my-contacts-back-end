import { Request, Response } from "express";

import clientLoginService from "../../services/login/clientLogin.service";

const clientLoginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const token = await clientLoginService({ email, password });

  return res.json({ token });
};

export default clientLoginController;
