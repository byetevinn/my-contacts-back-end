import { clientRepository } from "../../utilities/repositories";

const listClientService = async (id: string) => {
  const clients = clientRepository.findOne({
    where: { id },
    relations: { contacts: true },
  });

  return clients;
};

export default listClientService;
