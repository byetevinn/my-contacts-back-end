import { clientRepository } from "../../utilities/repositories";

const listClientsService = async () => {
  const clients = clientRepository.find();

  return clients;
};

export default listClientsService;
