import bcrypt from "bcrypt";

import { clientRepository } from "../../utilities/repositories";
import { IClientRequest } from "../../interfaces/clients";
import { AppError } from "../../errors/AppError";
import { validateCreateClient } from "../../validators/clientsValidations";

const clientCreateService = async ({
  email,
  password,
  fullName,
  phone,
}: IClientRequest) => {
  const clients = await clientRepository.find();

  const emailAlreadyExists = clients.find((client) => client.email === email);

  if (emailAlreadyExists) {
    throw new AppError("Email already exists");
  }

  await validateCreateClient({ email, password, fullName, phone });

  const client = clientRepository.create({
    email,
    password: bcrypt.hashSync(password, 10),
    fullName,
    phone,
  });

  await clientRepository.save(client);

  return client;
};

export default clientCreateService;
