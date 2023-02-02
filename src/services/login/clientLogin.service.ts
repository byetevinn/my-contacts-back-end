import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AppError } from "../../errors/AppError";
import { IClientLogin } from "../../interfaces/clients";
import { clientRepository } from "../../utilities/repositories";

const clientLoginService = async ({ email, password }: IClientLogin) => {
  const users = await clientRepository.find();

  const account = users.find((user) => user.email === email);

  if (!account) {
    throw new AppError("Account not found");
  }

  if (!bcrypt.compareSync(password, account.password)) {
    throw new AppError("Wrong email/password", 403);
  }

  const token = jwt.sign(
    { email: account.email },
    String(process.env.SECRET_KEY),
    {
      expiresIn: "24h",
      subject: account.id,
    }
  );

  return token;
};

export default clientLoginService;
