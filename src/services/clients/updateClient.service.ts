import { hashSync } from "bcrypt";

import { IClientUpdate } from "../../interfaces/clients";
import { clientRepository } from "../../utilities/repositories";

const updateClientService = async ({
  email,
  password,
  fullName,
  phone,
  id,
}: IClientUpdate) => {
  const client = await clientRepository.findOneBy({ id });

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
