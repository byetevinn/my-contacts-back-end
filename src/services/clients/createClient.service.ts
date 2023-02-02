import { clientRepository } from "../../utilities/repositories";
import { IClientRequest } from "../../interfaces/clients";

const clientCreateService = async ({
  email,
  password,
  fullName,
  phone,
}: IClientRequest) => {
  const clients = await clientRepository.find();

  const emailAlreadyExists = clients.find((client) => client.email === email);

  if (!emailAlreadyExists) {
  }
};

export default clientCreateService;
