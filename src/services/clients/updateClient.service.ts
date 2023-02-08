import { hashSync } from "bcrypt";

import { AppError } from "../../errors/AppError";
import { IClientUpdate } from "../../interfaces/clients";
import { clientRepository } from "../../utilities/repositories";
import { validateUpdateClient } from "../../validators/clientsValidations";

const updateClientService = async ({
  email,
  password,
  fullName,
  phone,
  id,
}: IClientUpdate) => {
  const client = await clientRepository.findOneBy({ id });
  const clients = await clientRepository.find();

  const emailAlreadyExists = clients.find((client) => client.email === email);

  if (client!.email !== email) {
    if (emailAlreadyExists) {
      throw new AppError("Email already exists");
    }
  }

  await validateUpdateClient({ email, password, fullName, phone });

  await clientRepository.update(id, {
    email: email ? email : client!.email,
    password: password ? hashSync(password, 10) : client!.password,
    fullName: fullName ? fullName : client!.fullName,
    phone: phone ? phone : client!.phone,
  });

  const updatedClient = await clientRepository.findOneBy({ id });

  return updatedClient;
};

export default updateClientService;
